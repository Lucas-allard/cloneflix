import React from 'react';
import logo from '../../assets/images/Logo_cloneflix_C.png'
import {fetchMovie, fetchSerie} from "../../store/slice/movieSlice";
import {useDispatch, useSelector} from "react-redux";
import {addToWatchList} from "../../request/userRequest";

const MovieCard = ({type, title, data, isActiveModal, setIsActiveModal}) => {
    const {userData} = useSelector(state => state.user)
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
        // dispatch(addNewToWatchList(id, movie))
        addToWatchList(type, id, movie)
        e.currentTarget.disabled = true;
    }

    return (
        <div className="tile">
            <div className="tile-media">
                {data.backdrop_path ?
                    <img src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`} alt="logo"/>
                    : <img
                        src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105403.jpg"
                        alt=""
                        style={{width: "300px", height: "169px"}}
                    />
                }
            </div>

            <div className="tile-title">
                <h2>
                    {titleInArray && titleInArray.map((title, index) => <span key={index}> {title}</span>)}
                    {nameInArray && nameInArray.map((name, index) => <span key={index}>{name}</span>)}
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
                        <button onClick={(e) => onHandleAddToWatchList(e, type, userData.id, data)}>
                            <i className="fas fa-plus"></i>
                        </button>
                        <button>
                            <i className="fas fa-thumbs-up"></i>
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
        </div>
    );
}

export default MovieCard;