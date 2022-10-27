import React, {useRef} from 'react';
import logo from '../../assets/images/Logo_cloneflix_C.png'
import {fetchMovie, fetchSerie} from "../../store/slice/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {
    addNewToWatchList,
    removeNewToWatchListMovies,
    removeNewToWatchListSeries
} from "../../store/slice/userSlice";
import MyLoader from "../Loader/Loader";

const MovieCard = ({type, title, data, isActiveModal, setIsActiveModal, isLoading, isDeletable}) => {
    const {userData} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const myRef = useRef(null);
    const titleInArray = title?.split(" ");
    const nameInArray = data.name?.split(" ");

    const onHandleClick = (id) => {
        console.log(id)
        if (type === "movie") {
            dispatch(fetchMovie(id))
        } else if (type === "tv") {
            dispatch(fetchSerie(id))
        }


        setTimeout(() => {
            setIsActiveModal(!isActiveModal);
        }, 1500)
    }

    const onHandleAddToWatchList = (e, type, id, movie) => {

        dispatch(addNewToWatchList({type, id, movie}))
        e.currentTarget.disabled = true;

    }

    const onHandleRemoveToWatchList = (type, id, movie) => {
        if (type === "movie") {
            dispatch(removeNewToWatchListMovies({type, id, movie}))
        }
        if (type === "tv") {
            dispatch(removeNewToWatchListSeries({type, id, movie}))
        }
    }

    return (
        isLoading ?
            <MyLoader/>
            :
            <div className="tile" style={{width: '300px', height: '169px',}} onClick={() => onHandleClick(data.id)}>
                <div className="tile-media">
                    {data.backdrop_path &&
                        <img src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`} alt="logo"/>
                    }
                    {data.profile_path &&
                        <img  style={{height: "169px"}} src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`} alt="logo"/>
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
                                    <button onClick={(e) => onHandleAddToWatchList(e, type, userData.id, data)}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-thumbs-up"></i>
                                    </button>
                                    {isDeletable ?
                                        <button onClick={() => onHandleRemoveToWatchList(type, userData.id, data)}>
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