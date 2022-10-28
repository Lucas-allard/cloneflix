import React, {useEffect} from 'react';
import WatchListMovies from "../components/WatchList/WatchListMovies";
import WatchListSeries from "../components/WatchList/WatchListSeries";
import {useLocation} from "react-router-dom";
import {fetchSeriesGenres} from "../store/slice/movieSlice";
import {isAuthenticated} from "../store/slice/userSlice";
import {useDispatch} from "react-redux";

const WatchListPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("ok")
        dispatch(isAuthenticated())
    }, [])

    return (
        <>
            <div className="watchlist-header">
                <h1>Ma liste</h1>
            </div>
            {location.pathname === "/watchlist/movies" && <WatchListMovies/>}
            {location.pathname === "/watchlist/series" && <WatchListSeries/>}
        </>
    )
}

export default WatchListPage;