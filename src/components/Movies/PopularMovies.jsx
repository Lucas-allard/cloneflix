import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchLastPopularMovies, fetchMovie} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import './popularMovies.scss';

const PopularMovies = () => {
    const {movies, movie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveSlide, setIsActiveSlide] = useState(false);

    useEffect(() => {
        dispatch(fetchLastPopularMovies())
    }, [])

    useEffect(() => {
        console.log(isActiveModal)
    }, [isActiveModal])

    // const onHandleClick = () => {
    //     window.scrollTo(-300, 0)
    //     // setIsActiveSlide(true);
    //     //
    //     // setTimeout(() => {
    //     //     setIsActiveSlide(false)
    //     // }, 500)
    //
    // }

    return (
        <>
            <section className="container">
                <h1>Films les plus regardés</h1>
                <div className="row">
                    <div className={`row-inner ${isActiveSlide ? "slide play" : "slide"}`}>
                        {movies && movies.map((movie, index) =>
                            (
                                <div key={index}>
                                    <MovieCard
                                        movie={movie}
                                        isActiveModal={isActiveModal}
                                        setIsActiveModal={setIsActiveModal}
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
                    movie={movie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
        </>

    );
}

export default PopularMovies;