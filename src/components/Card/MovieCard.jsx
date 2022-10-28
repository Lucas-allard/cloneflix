import React from 'react';
import logo from '../../assets/images/Logo_cloneflix_C.png'
import {fetchMovie, fetchSerie} from "../../store/slice/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {
    addNewToWatchList,
    removeNewToWatchListMovies,
    removeNewToWatchListSeries
} from "../../store/slice/userSlice";
import MyLoader from "../Loader/Loader";
import {useNavigate} from "react-router-dom";

const MovieCard = ({type, title, data, isActiveModal, setIsActiveModal, isLoading, isDeletable}) => {
    const {userData, isAuthenticated} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const titleInArray = title?.split(" ");
    const nameInArray = data.name?.split(" ");
    let userId = userData?.id

    const onHandleClick = (id) => {
        if (type === "movie") {
            dispatch(fetchMovie(id))

        } else if (type === "tv") {
            dispatch(fetchSerie(id))
        }


        setTimeout(() => {
            setIsActiveModal(!isActiveModal);
            window.scroll(0, 0)
        }, 1500)
    }

    const onHandleAddToWatchList = (e, type, movie) => {;
        if (isAuthenticated) {
            dispatch(addNewToWatchList({type, userId, movie}))
            e.currentTarget.disabled = true;
        } else {
            navigate('/')
        }
    }

    const onHandleRemoveToWatchList = (type, movie) => {
        if (isAuthenticated) {
            if (type === "movie") {
                dispatch(removeNewToWatchListMovies({type, userId, movie}))
            }
            if (type === "tv") {
                dispatch(removeNewToWatchListSeries({type, userId, movie}))
            }
        } else {
            navigate('/')
        }
    }

    return (
        isLoading ?
            <MyLoader/>
            :
            <div className="tile" style={{width: '300px', height: '169px',}} >
                <div className="tile-media" onClick={() => onHandleClick(data.id)}>
                    {data.backdrop_path &&
                        <img src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`} alt="logo"/>
                    }
                    {data.profile_path &&
                        <img style={{height: "169px"}} src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`}
                             alt="logo"/>
                    }
                    {!data.backdrop_path && !data.profile_path && <img
                        src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105403.jpg"
                        alt=""
                        style={{width: "300px", height: "169px"}}
                    />
                    }
                </div>
                <div className="tile-title">
                    <h3>
                        {titleInArray && titleInArray.map((title, index) => <span
                            key={index}> {title}</span>)}
                        {data.media_type === "person" && nameInArray && nameInArray.map((name, index) => <span
                            key={index}> {name}</span>)}
                    </h3>
                </div>
                <div className="tile-logo">
                    <img src={logo} alt="logo"/>
                </div>
                {data.media_type !== 'person' &&
                    <>
                        <div className="tile-features">
                            <div className="features-block">
                                <div className="features-action">
                                    <button>
                                        <i className="fas fa-play"></i>
                                    </button>
                                    <button onClick={(e) => onHandleAddToWatchList(e, type, data)}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-thumbs-up"></i>
                                    </button>
                                    {isDeletable ?
                                        <button onClick={() => onHandleRemoveToWatchList(type, data)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                        : null
                                    }
                                </div>
                                <div className="features-detail">
                                    <button onClick={() => onHandleClick(data.id)}>
                                        <i className="fas fa-chevron-down"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="features-title">
                                <p>"{title}"</p>
                            </div>
                        </div>
                    </>
                }

            </div>
    );
}

export default MovieCard;