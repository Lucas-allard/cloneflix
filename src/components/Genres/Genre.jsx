import React, {useEffect, useState} from 'react';
import '../Movies/movies.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    fetchMoviesWithGenres,
    fetchSeriesWithGenres
} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import MyLoader from "../Loader/Loader";

const Genre = ({genres, type, isActiveModal, setIsActiveModal}) => {
    const {moviesWithGenre} = useSelector(state => state.movies.data.movies)
    const {seriesWithGenre} = useSelector(state => state.movies.data.series)
    const {movie, serie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        if (type === "movie") {
            dispatch(fetchMoviesWithGenres(genres));
        } else if (type === "tv") {
            dispatch(fetchSeriesWithGenres(genres));
        }

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    useEffect(() => {
        console.log(movie)
    }, [movie])

    return genres.map((genre, index) => (
            <div key={index}>
                <section className="container">
                    <h2>{genre.name}</h2>
                    <div className="row">
                        <div className={`row-inner`}>
                            {
                                type === "movie" ?
                                    moviesWithGenre[index] && moviesWithGenre[index].map((movie, index) =>
                                        (
                                            <div key={index}>
                                                <MovieCard
                                                    data={movie}
                                                    title={movie.original_title}
                                                    isActiveModal={isActiveModal}
                                                    setIsActiveModal={setIsActiveModal}
                                                    type="movie"
                                                    isLoading={isLoading}
                                                />
                                            </div>
                                        )
                                    )
                                    :
                                    seriesWithGenre[index] && seriesWithGenre[index].map((serie, index) =>
                                        (

                                            <div key={index}>
                                                <MovieCard
                                                    data={serie}
                                                    title={serie.original_name}
                                                    isActiveModal={isActiveModal}
                                                    setIsActiveModal={setIsActiveModal}
                                                    type="tv"
                                                    isLoading={isLoading}
                                                />
                                            </div>
                                        )
                                    )
                            }
                        </div>

                    </div>
                </section>
            </div>
        )
    );
}

export default Genre;