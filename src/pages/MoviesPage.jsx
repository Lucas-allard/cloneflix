import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import PopularMovies from "../components/Movies/PopularMovies";
import TopRatedMovies from "../components/Movies/TopRatedMovies";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesGenres} from "../store/slice/movieSlice";
import Genre from "../components/Genres/Genre";
import MovieModal from "../components/Modal/MovieModal";

const MoviesPage = () => {
    const {genres} = useSelector(state => state.movies.data.movies)
    const dispatch = useDispatch()
    const {movie} = useSelector(state => state.movies.data);
    const [isActiveModal, setIsActiveModal] = useState(false);

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
                    type="movie"
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
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

export default MoviesPage;