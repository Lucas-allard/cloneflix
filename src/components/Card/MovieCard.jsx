import React from 'react';
import logo from '../../assets/images/Logo_cloneflix_C.png'
import {fetchMovie, fetchSerie} from "../../store/slice/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {addToWatchList, removeToWatchList} from "../../request/userRequest";
import {
    addNewToWatchList,
    fetchWatchListMovies,
    fetchWatchListSeries,
    removeNewToWatchList
} from "../../store/slice/userSlice";
import {useNavigate} from "react-router-dom";

const MovieCard = ({type, title, data, isActiveModal, setIsActiveModal}) => {
    const {userData, watchList} = useSelector(state => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
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

        addToWatchList(type, id, movie)
        e.currentTarget.disabled = true;

    }

    const onHandleRemoveToWatchList = (type, id, movie) => {
        dispatch(removeNewToWatchList(type, id, movie))
        // removeToWatchList(type, id, movie)
        // navigate('/watchlist')
        // if (type === "movie") {
        //     console.log("hello")
        //     dispatch(fetchWatchListMovies(userData.id))
        // }
        // if (type === "serie") {
        //     dispatch(fetchWatchListSeries(userData.id))
        // }
    }

    return (
        <div className="tile">
            <div className="tile-media">
                {data.backdrop_path &&
                    <img src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`} alt="logo"/>
                }
                {data.profile_path &&
                    <img src={`https://image.tmdb.org/t/p/w300/${data.profile_path}`} alt="logo"/>
                }
                {!data.backdrop_path && !data.profile_path && <img
                    src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105403.jpg"
                    alt=""
                    style={{width: "300px", height: "169px"}}
                />
                }
            </div>

            <div className="tile-title">
                <h2>
                    {titleInArray && titleInArray.map((title, index) => <span
                        key={index}> {title}</span>)}
                    {data.media_type === "person" && nameInArray && nameInArray.map((name, index) => <span
                        key={index}> {name}</span>)}
                </h2>
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
                                <button onClick={() => onHandleRemoveToWatchList(type, userData.id, data)}>
                                    <i className="fas fa-trash"></i>
                                </button>
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