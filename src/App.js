import './assets/styles/reset.css';
import './assets/styles/normalize.css';
import './assets/styles/index.scss';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SelectUserPage from "./pages/SelectUserPage";
import SeriesPage from "./pages/SeriesPage";
import WatchListPage from "./pages/WatchListPage";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage";
import {useDispatch, useSelector} from "react-redux";
import PrivateRoute from "./routes/PrivateRoute";
import { isAuthenticated} from "./store/slice/userSlice";

const App = () => {
    const [isActiveSearch, setIsActiveSearch] = useState(false);

    const onHandleCloseSearchBar = (e) => {
        if (isActiveSearch && (e.clientX < 1235 || e.clientX > 1497 || e.clientY > 60)) {
            setIsActiveSearch(false);
        }
    }


    return (
        <main onClick={(e) => onHandleCloseSearchBar(e)}>
            <BrowserRouter>
                <Header isActiveSearch={isActiveSearch} setIsActiveSearch={setIsActiveSearch}/>
                <Routes>
                    <Route path="/" element={<SelectUserPage/>}/>
                    <Route path="/browse" element={<Homepage/>}/>
                    <Route path="/movies/" element={<MoviesPage/>}/>
                    <Route path="/series" element={<SeriesPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/" element={<PrivateRoute/>}>
                        <Route path="/watchlist/movies" element={<WatchListPage/>}/>
                        <Route path="/watchlist/series" element={<WatchListPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>

    )
}
export default App;


