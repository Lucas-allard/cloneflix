import React, {useEffect, useRef, useState} from 'react';
import '../../commons/layout.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    fetchMoviesWithGenres,
    fetchSeriesWithGenres
} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import MyLoader from "../Loader/Loader";
import Slider from "../Slider/Slider";
import Container from "../../commons/Container";
import Row from "../../commons/Row";

const MoviesGenres = ({genres, isActiveModal, setIsActiveModal}) => {
    const {moviesWithGenre} = useSelector(state => state.movies.data.movies)
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        dispatch(fetchMoviesWithGenres(genres));

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return genres.map((genre, index) => (
                <Container title={genre.name} key={index}>
                    <Row>
                        <Slider>
                                {moviesWithGenre[index] && moviesWithGenre[index].map((movie, index) =>
                                    (
                                            <MovieCard
                                                data={movie}
                                                title={movie.original_title}
                                                isActiveModal={isActiveModal}
                                                setIsActiveModal={setIsActiveModal}
                                                type="movie"
                                                isLoading={isLoading}
                                                key={index}
                                            />
                                    )
                                )}
                        </Slider>
                    </Row>
                </Container>
        )
    );
}

export default MoviesGenres;