import React from 'react';
import './movieModal.scss';

const MovieModal = ({movie, isActiveModal, setIsActiveModal}) => {
    const titleInArray = movie.original_title.split(" ");
    console.log(movie)

    const onHandleCloseModal = (e) => {
        console.log(e.clientX)
        if (e.clientX < 330 || e.clientX > 1000) {
            setIsActiveModal(false);
        }
    }
    return (
        <div className="modal-container" onClick={(e) => onHandleCloseModal(e)}>
            <div className='modal'>
                <div className="modal-media">
                    <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} alt="image du film"/>
                </div>
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
                        <i className="fas fa-plus"></i>
                    </button>
                    <button>
                        <i className="fas fa-thumbs-up"></i>
                    </button>
                    <button onClick={() => setIsActiveModal(false)}>
                        <i className="fas fa-times"></i>
                    </button>
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
                                {movie.production_companies.map((e,i) => <li key={i}>{e.name},</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MovieModal;