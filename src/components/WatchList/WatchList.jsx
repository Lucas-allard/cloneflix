import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWatchListMovies, fetchWatchListSeries} from "../../store/slice/userSlice";
import MovieCard from "../Card/MovieCard";
import './watchlist.scss'

const WatchList = () => {
    const {userData, watchList} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [isWatchListMovies, setIsWatchListMovies] = useState(true);
    const [isWatchListSeries, setIsWatchListSeries] = useState(false);
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveSlide, setIsActiveSlide] = useState(false);

    useEffect(() => {
        dispatch(fetchWatchListMovies(userData.id))
        dispatch(fetchWatchListSeries(userData.id))
    }, [])

    const onHandleClick = () => {
        setIsWatchListMovies(!isWatchListMovies);
        setIsWatchListSeries(!isWatchListSeries);
    }
    return (
        <section className="container">
            <div className="watchlist-header">
                <h1>Ma liste</h1>
                <div>
                    <button onClick={onHandleClick}>Films</button>
                    <button onClick={onHandleClick}>Séries</button>
                </div>
            </div>
            {isWatchListMovies &&
                <div className='watchlist'>
                    {watchList.movies && watchList.movies.map((movie, index) =>
                        <div className="watchlist-item" key={index}>
                            <MovieCard
                                type="film"
                                title={movie.original_title}
                                data={movie}
                                isActiveModal={isActiveModal}
                                setIsActiveModal={setIsActiveModal}
                            />
                        </div>
                    )
                    }
                </div>
            }
            {isWatchListSeries &&
                <div className='watchlist'>
                    {watchList.series && watchList.series.map((movie, index) =>
                        <div className="watchlist-item" key={index}>
                            <MovieCard
                                type="series"
                                title={movie.original_name}
                                data={movie}
                                isActiveModal={isActiveModal}
                                setIsActiveModal={setIsActiveModal}
                            />
                        </div>
                    )
                    }
                </div>
            }

        </section>);
}

export default WatchList;