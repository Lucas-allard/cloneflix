import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" />
                <Route path="/movies/"/>
                <Route path="/series"/>
                <Route path="/favoris"/>
                <Route path="/recherche"/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;


