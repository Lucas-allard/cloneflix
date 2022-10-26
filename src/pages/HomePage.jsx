import React from 'react';
import Header from "../components/Header/Header";
import PopularMovies from "../components/Movies/PopularMovies";
import TopRatedMovies from "../components/Movies/TopRatedMovies";
import PopularSeries from "../components/Series/PopularSeries";
import TopRatedSeries from "../components/Series/TopRatedSeries";

const HomePage = () => {
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