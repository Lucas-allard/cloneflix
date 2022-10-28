import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {fetchSeriesGenres} from "../store/slice/movieSlice";
import MoviesGenres from "../components/Genres/MoviesGenres";
import PopularSeries from "../components/Series/PopularSeries";
import TopRatedSeries from "../components/Series/TopRatedSeries";
import MovieModal from "../components/Modal/MovieModal";
import SeriesGenres from "../components/Genres/SeriesGenres";
import {isAuthenticated} from "../store/slice/userSlice";

const MoviesPage = () => {
    const {genres} = useSelector(state => state.movies.data.series)
    const dispatch = useDispatch()
    const {serie} = useSelector(state => state.movies.data);
    const [isActiveModal, setIsActiveModal] = useState(false);

    useEffect(() => {
        dispatch(fetchSeriesGenres())
        dispatch(isAuthenticated())
    }, [])

    return (
        <>
            <PopularSeries/>
            <TopRatedSeries/>
            {genres &&
                <SeriesGenres
                    genres={genres}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
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

export default MoviesPage;