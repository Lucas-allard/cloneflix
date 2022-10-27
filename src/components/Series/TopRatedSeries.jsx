import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchTopRatedSeries
} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import '../Movies/movies.scss';
import '../Card/movieCard.scss';
import MyLoader from "../Loader/Loader";

const TopRatedSeries = () => {
    const {topRatedSeries} = useSelector(state => state.movies.data.series);
    const {serie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveSlide, setIsActiveSlide] = useState(false);

    useEffect(() => {
        dispatch(fetchTopRatedSeries())

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
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
                <h1>Séries les mieux notées</h1>
                <div className="row">
                    <div className={`row-inner ${isActiveSlide ? "slide play" : "slide"}`}>
                        {topRatedSeries && topRatedSeries.map((movie, index) => {
                                return isLoading ?
                                    <MyLoader key={index}/>
                                    : <div key={index}>
                                        <MovieCard
                                            title={movie.original_name}
                                            data={movie}
                                            isActiveModal={isActiveModal}
                                            setIsActiveModal={setIsActiveModal}
                                            type="tv"
                                        />
                                    </div>
                            }
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

export default TopRatedSeries;