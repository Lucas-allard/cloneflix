import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTopRatedMovies, fetchMovie} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import './movies.scss';
import '../Card/movieCard.scss';
import MyLoader from "../Loader/Loader";


const TopRatedMovies = () => {
    const {topRatedMovies} = useSelector(state => state.movies.data.movies);
    const {movie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveSlide, setIsActiveSlide] = useState(false);

    useEffect(() => {
        dispatch(fetchTopRatedMovies())

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            <section className="container">
                <h2>Films les mieux notés</h2>
                <div className="row">
                    <div className={`row-inner ${isActiveSlide ? "slide play" : "slide"}`}>
                        {topRatedMovies && topRatedMovies.map((movie, index) => (<div key={index}>
                                    <MovieCard
                                        title={movie.original_title}
                                        data={movie}
                                        isActiveModal={isActiveModal}
                                        setIsActiveModal={setIsActiveModal}
                                        type="movie"
                                        isLoading={isLoading}
                                    />
                                </div>
                            )
                        )}
                    </div>
                    <div className="prev-movies">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="next-movies">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </section>
            {isActiveModal &&
                <MovieModal
                    type="movie"
                    title={movie.original_title}
                    movie={movie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
        </>

    );
}

export default TopRatedMovies;