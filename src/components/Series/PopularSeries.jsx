import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularSeries} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import '../Movies/movies.scss';
import '../Card/movieCard.scss';
import MyLoader from "../Loader/Loader";

const PopularSeries = () => {
    const {popularSeries} = useSelector(state => state.movies.data.series);
    const {serie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveSlide, setIsActiveSlide] = useState(false);

    useEffect(() => {
        dispatch(fetchPopularSeries())

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])


    return (
        <>
            <section className="container">
                <h2>Séries les plus regardées</h2>
                <div className="row">
                    <div className={`row-inner ${isActiveSlide ? "slide play" : "slide"}`}>
                        {popularSeries && popularSeries.map((movie, index) => (
                            <div key={index}>
                                    <MovieCard
                                        data={movie}
                                        title={movie.original_name}
                                        isActiveModal={isActiveModal}
                                        setIsActiveModal={setIsActiveModal}
                                        type="tv"
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
                    type="tv"
                    title={serie.original_name}
                    movie={serie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
        </>

    );
}

export default PopularSeries;