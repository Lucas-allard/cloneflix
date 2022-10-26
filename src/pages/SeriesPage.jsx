import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import { fetchSeriesGenres} from "../store/slice/movieSlice";
import Genre from "../components/Genres/Genre";
import PopularSeries from "../components/Series/PopularSeries";
import TopRatedSeries from "../components/Series/TopRatedSeries";

const MoviesPage = () => {
    const {genres} = useSelector(state => state.movies.data.series)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSeriesGenres())
    }, [])


    return (
        <>
            <PopularSeries/>
            <TopRatedSeries/>
            {genres &&
                <Genre
                    genres={genres}
                    type="serie"
                />}
        </>
    );
}

export default MoviesPage;