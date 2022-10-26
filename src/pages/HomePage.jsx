import React from 'react';
import Header from "../components/Header/Header";
import PopularMovies from "../components/Movies/PopularMovies";

const HomePage = () => {
    return (
        <>
            <Header />
            <PopularMovies/>
        </>
    );
}

export default HomePage;