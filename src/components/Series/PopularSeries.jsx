import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularSeries} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import '../Movies/movies.scss';
import '../Card/movieCard.scss';

const PopularSeries = () => {
    const {popularSeries} = useSelector(state => state.movies.data.series);
    const {serie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveSlide, setIsActiveSlide] = useState(false);

    useEffect(() => {
        dispatch(fetchPopularSeries())
    }, [])

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
                <h1>Séries les plus regardées</h1>
                <div className="row">
                    <div className={`row-inner ${isActiveSlide ? "slide play" : "slide"}`}>
                        {popularSeries && popularSeries.map((movie, index) =>
                            (
                                <div key={index}>
                                    <MovieCard
                                        data={movie}
                                        title={movie.original_name}
                                        isActiveModal={isActiveModal}
                                        setIsActiveModal={setIsActiveModal}
                                        type="tv"
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