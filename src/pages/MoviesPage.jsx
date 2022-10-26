import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import PopularMovies from "../components/Movies/PopularMovies";
import TopRatedMovies from "../components/Movies/TopRatedMovies";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesGenres} from "../store/slice/movieSlice";
import Genre from "../components/Genres/Genre";

const MoviesPage = () => {
    const {genres} = useSelector(state => state.movies.data.movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMoviesGenres())
    }, [])


    return (
        <>
            <PopularMovies/>
            <TopRatedMovies/>
            {genres &&
                <Genre
                    genres={genres}
                    type="film"
                />
            }
        </>
    );
}

export default MoviesPage;