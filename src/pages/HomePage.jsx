import React, {useEffect} from 'react';
import PopularMovies from "../components/Movies/PopularMovies";
import TopRatedMovies from "../components/Movies/TopRatedMovies";
import PopularSeries from "../components/Series/PopularSeries";
import TopRatedSeries from "../components/Series/TopRatedSeries";
import {useDispatch} from "react-redux";
import {isAuthenticated} from "../store/slice/userSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(isAuthenticated())
    }, [])

    return (
        <>
            <PopularMovies/>
            <TopRatedMovies/>
            <PopularSeries/>
            <TopRatedSeries/>
        </>
    );
}

export default HomePage;