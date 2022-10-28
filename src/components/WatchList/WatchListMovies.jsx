import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWatchListMovies, fetchWatchListSeries, isAuthenticated} from "../../store/slice/userSlice";
import MovieCard from "../Card/MovieCard";
import './watchlist.scss'
import {useNavigate} from "react-router-dom";
import MovieModal from "../Modal/MovieModal";


const WatchListMovies = () => {
    const {userData, watchList} = useSelector(state => state.user)
    const {movie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [isActiveModal, setIsActiveModal] = useState(false);

    useEffect(() => {
        dispatch(fetchWatchListMovies(userData.id))
        dispatch(isAuthenticated())

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])


    return (
        <section className="container">
            <h2>Mes films</h2>
            <div className='watchlist'>
                {watchList.movies && watchList.movies.map((movie, index) => (
                        <div className="watchlist-item" key={index}>
                            <MovieCard
                                type="movie"
                                title={movie.original_title}
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
                    title={movie.original_title}
                    movie={movie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
        </section>);
}

export default WatchListMovies;