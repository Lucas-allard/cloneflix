import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularSeries} from "../../store/slice/movieSlice";
import MovieCard from "../Card/MovieCard";
import MovieModal from "../Modal/MovieModal";
import '../../commons/layout.scss';
import '../Card/movieCard.scss';
import Slider from "../Slider/Slider";
import Container from "../../commons/Container";
import Row from "../../commons/Row";

const PopularSeries = () => {
    const {popularSeries} = useSelector(state => state.movies.data.series);
    const {serie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [isActiveModal, setIsActiveModal] = useState(false);

    useEffect(() => {
        dispatch(fetchPopularSeries())

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])


    return (
        <>
            <Container title="Séries les plus regardées">
                <Row>
                    <Slider>
                            {popularSeries && popularSeries.map((movie, index) => (
                                        <MovieCard
                                            data={movie}
                                            title={movie.original_name}
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

export default PopularSeries;