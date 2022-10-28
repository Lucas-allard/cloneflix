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

const Genre = ({genres, isActiveModal, setIsActiveModal}) => {
    const {moviesWithGenre} = useSelector(state => state.movies.data.movies)
    const {seriesWithGenre} = useSelector(state => state.movies.data.series)
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        dispatch(fetchSeriesWithGenres(genres));

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return genres.map((genre, index) => (
                <Container title={genre.name} key={index}>
                    <Row>
                        <Slider>
                            {seriesWithGenre[index] && seriesWithGenre[index].map((serie, index) =>
                                (
                                        <MovieCard
                                            data={serie}
                                            title={serie.original_name}
                                            isActiveModal={isActiveModal}
                                            setIsActiveModal={setIsActiveModal}
                                            type="tv"
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

export default Genre;