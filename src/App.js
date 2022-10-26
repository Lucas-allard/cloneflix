import './assets/styles/reset.css';
import './assets/styles/normalize.css';
import './assets/styles/index.scss';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SelectUserPage from "./pages/SelectUserPage";

const App = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SelectUserPage/>}/>
                    <Route path="/browse" element={<Homepage/>}/>
                    <Route path="/movies/" element={<MoviesPage/>}/>
                    <Route path="/series"/>
                    <Route path="/favoris"/>
                    <Route path="/recherche"/>
                </Routes>
            </BrowserRouter>
    )
}
export default App;


