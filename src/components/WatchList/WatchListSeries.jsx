import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWatchListMovies, fetchWatchListSeries, isAuthenticated} from "../../store/slice/userSlice";
import MovieCard from "../Card/MovieCard";
import './watchlist.scss'
import {useNavigate} from "react-router-dom";
import MovieModal from "../Modal/MovieModal";


const WatchListSeries = () => {
    const {userData, watchList} = useSelector(state => state.user)
    const {serie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [isActiveModal, setIsActiveModal] = useState(false);

    useEffect(() => {
        dispatch(fetchWatchListSeries(userData.id))
        dispatch(isAuthenticated())

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])


    return (
        <section className="container">
            <h2>Mes séries</h2>
                <div className='watchlist'>
                    {watchList.series && watchList.series.map((movie, index) => (
                            <div className="watchlist-item" key={index}>
                                <MovieCard
                                    type="tv"
                                    title={movie.original_name}
                                    data={movie}
                                    isActiveModal={isActiveModal}
                                    setIsActiveModal={setIsActiveModal}
                                    isLoading={isLoading}
                                    isDeletable={true}
                                />
                            </div>
                        )
                    )}
                </div>
            {isActiveModal &&
                <MovieModal
                    title={serie.original_name}
                    movie={serie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
        </section>);
}

export default WatchListSeries;