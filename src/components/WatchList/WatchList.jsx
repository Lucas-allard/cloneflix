import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWatchListMovies, fetchWatchListSeries} from "../../store/slice/userSlice";
import MovieCard from "../Card/MovieCard";
import './watchlist.scss'
import {useNavigate} from "react-router-dom";
import MovieModal from "../Modal/MovieModal";


const WatchList = () => {
    const {userData, watchList} = useSelector(state => state.user)
    const {serie, movie} = useSelector(state => state.movies.data);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const [isWatchListMovies, setIsWatchListMovies] = useState(true);
    const [isWatchListSeries, setIsWatchListSeries] = useState(false);
    const [isActiveModal, setIsActiveModal] = useState(false);

    useEffect(() => {
        dispatch(fetchWatchListMovies(userData.id))
        dispatch(fetchWatchListSeries(userData.id))

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
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
            }
            {isWatchListSeries &&
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
            }
            {isActiveModal && isWatchListSeries &&
                <MovieModal
                    title={serie.original_name}
                    movie={serie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
            {isActiveModal && isWatchListMovies &&
                <MovieModal
                    title={movie.original_title}
                    movie={movie}
                    isActiveModal={isActiveModal}
                    setIsActiveModal={setIsActiveModal}
                />
            }
        </section>);
}

export default WatchList;