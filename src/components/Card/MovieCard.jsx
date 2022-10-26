import './movieCard.scss';
import React from 'react';
import logo from '../../assets/images/Logo_cloneflix_C.png'
import {fetchMovie} from "../../store/slice/movieSlice";
import {useDispatch} from "react-redux";

const MovieCard = ({movie, isActiveModal, setIsActiveModal}) => {
    const dispatch = useDispatch();
    const titleInArray = movie.original_title.split(" ");

     const onHandleClick = (id) => {
         dispatch(fetchMovie(id))
         setTimeout(() => {
             setIsActiveModal(!isActiveModal);
         },500)
    }

    return (
        <div className="tile">
            <div className="tile-media">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="logo"/>
            </div>
            <div className="tile-title">
                <h2>
                    {titleInArray && titleInArray.map((title, index) => <span key={index}> {title}</span>)}
                </h2>
            </div>
            <div className="tile-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="tile-features">
                <div className="features-block">
                    <div className="features-action">
                        <button>
                            <i className="fas fa-play"></i>
                        </button>
                        <button>
                            <i className="fas fa-plus"></i>
                        </button>
                        <button>
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                    </div>
                    <div className="features-detail">
                        <button onClick={() => onHandleClick(movie.id)}>
                            <i className="fas fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <div className="features-title">
                    <p>"{movie.original_title}"</p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;