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

const Genre = ({genres, type}) => {
    const {moviesWithGenre} = useSelector(state => state.movies.data.movies)
    const {seriesWithGenre} = useSelector(state => state.movies.data.series)
    const {movie, serie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [isActiveModal, setIsActiveModal] = useState(false);


    useEffect(() => {
        if (type === "film") {
            dispatch(fetchMoviesWithGenres(genres));
        } else if (type === "serie") {
            dispatch(fetchSeriesWithGenres(genres));
        }

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        console.log(movie)
    }, [movie])

    return genres.map((genre, index) => (
            <div key={index}>
                <section className="container">
                    <h1>{genre.name}</h1>
                    <div className="row">
                        <div className={`row-inner`}>
                            {
                                type === "film" ?
                                    moviesWithGenre[index] && moviesWithGenre[index].map((movie, index) =>
                                        isLoading ? <MyLoader key={index}/> :
                                            <div key={index}>
                                                <MovieCard
                                                    data={movie}
                                                    title={movie.original_title}
                                                    isActiveModal={isActiveModal}
                                                    setIsActiveModal={setIsActiveModal}
                                                    type="movie"
                                                />
                                            </div>
                                    )
                                    :
                                    seriesWithGenre[index] && seriesWithGenre[index].map((serie, index) =>
                                        isLoading ? <MyLoader key={index}/> :
                                            <div key={index}>
                                                <MovieCard
                                                    data={serie}
                                                    title={serie.original_name}
                                                    isActiveModal={isActiveModal}
                                                    setIsActiveModal={setIsActiveModal}
                                                    type="tv"
                                                />
                                            </div>
                                    )
                            }
                        </div>
                    </div>
                </section>
                {isActiveModal && type === "serie" &&
                    <MovieModal
                        title={serie.original_name}
                        movie={serie}
                        isActiveModal={isActiveModal}
                        setIsActiveModal={setIsActiveModal}
                    />
                }
                {isActiveModal && type === "film" &&
                    <MovieModal
                        title={movie.original_title}
                        movie={movie}
                        isActiveModal={isActiveModal}
                        setIsActiveModal={setIsActiveModal}
                    />
                }
            </div>
        )
    );
}

export default Genre;