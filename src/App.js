import './assets/styles/reset.css';
import './assets/styles/normalize.css';
import './assets/styles/index.scss';
import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SelectUserPage from "./pages/SelectUserPage";
import SeriesPage from "./pages/SeriesPage";
import WatchListPage from "./pages/WatchListPage";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage";
import {useSelector} from "react-redux";

const App = () => {
    const {userData} = useSelector(state => state.user)
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
                    <Route path="/watchlist" element={<WatchListPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                </Routes>
            </BrowserRouter>
        </main>

    )
}
export default App;


