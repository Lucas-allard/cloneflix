import React from 'react';
import './movieModal.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteMovie, deleteSerie} from "../../store/slice/movieSlice";
import {addNewToWatchList, removeNewToWatchListMovies, removeNewToWatchListSeries} from "../../store/slice/userSlice";
import {useNavigate} from "react-router-dom";

const MovieModal = ({type, movie, title, setIsActiveModal}) => {
    const {userData, isAuthenticated} = useSelector(state => state.user);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const titleInArray = title.split(" ");
    const data = movie;

    const onHandleCloseModal = (e) => {
        if (e.clientX < 330 || e.clientX > 1000) {
            setIsActiveModal(false);
            dispatch(deleteMovie(movie))
            dispatch(deleteSerie(movie));
        }
    }

    const onHandleAddToWatchList = (e, type, id, movie) => {
        if (isAuthenticated) {
            dispatch(addNewToWatchList({type, id, movie}))
            e.currentTarget.disabled = true;
        } else {
            navigate('/')
        }
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
        <div className="modal-container" onClick={(e) => onHandleCloseModal(e)}>
            <div className='modal'>
                <div className="modal-media">
                    <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} alt="image du film"/>
                    <div className="modal-title">
                        <h2>
                            {titleInArray && titleInArray.map((title, index) => <span key={index}> {title}</span>)}
                        </h2>
                    </div>
                    <div className="modal-features">
                        <button>
                            <span>Lecture</span>
                            <i className="fas fa-play"></i>
                        </button>
                        <button>
                            <i className="fas fa-plus"
                               onClick={(e) => onHandleAddToWatchList(e, type, userData.id, movie)}></i>
                        </button>
                        <button>
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                        <button onClick={() => setIsActiveModal(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="modal-rate">
                    <p>Popularité : <span>{movie.popularity}</span></p>
                    <p>Note : <span>{movie.vote_average}</span></p>
                    <p>Nombre de vote : <span>{movie.vote_count}</span></p>
                </div>
                <div className="modal-detail">
                    <div className="modal-content">
                        <div className="modal-overview">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <div className="modal-info">
                        <div className="modal-real">
                            <p>Production : </p>
                            <ul>
                                {movie.production_companies.map((e, i) => <li key={i}>{e.name},</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MovieModal;