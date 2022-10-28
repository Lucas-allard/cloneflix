import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchLastPopularMovies, fetchMovie} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import '../../commons/layout.scss';
import '../Card/movieCard.scss';
import Slider from "../Slider/Slider";
import Container from "../../commons/Container";
import Row from "../../commons/Row";


const PopularMovies = () => {
    const {popularMovies} = useSelector(state => state.movies.data.movies);
    const {movie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isActiveModal, setIsActiveModal] = useState(false);

    useEffect(() => {
        dispatch(fetchLastPopularMovies())

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])


    return (
        <>
            <Container title="Films les plus regardés">
                <Row>
                    <Slider>
                        {popularMovies && popularMovies.map((movie, index) => (
                                <MovieCard
                                    title={movie.original_title}
                                    data={movie}
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

export default PopularMovies;