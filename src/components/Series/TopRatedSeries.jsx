import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchTopRatedSeries
} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import '../../commons/layout.scss';
import '../Card/movieCard.scss';
import MyLoader from "../Loader/Loader";
import Slider from "../Slider/Slider";
import Row from "../../commons/Row";
import Container from "../../commons/Container";

const TopRatedSeries = () => {
    const {topRatedSeries} = useSelector(state => state.movies.data.series);
    const {serie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [isActiveModal, setIsActiveModal] = useState(false);

    useEffect(() => {
        dispatch(fetchTopRatedSeries())

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            <Container title="Séries les mieux notées">
                <Row>
                    <Slider>
                            {topRatedSeries && topRatedSeries.map((movie, index) => (
                                        <MovieCard
                                            title={movie.original_name}
                                            data={movie}
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

export default TopRatedSeries;