import './header.scss';
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from '../../assets/images/Logo_cloneflix.png';
import {useDispatch, useSelector} from "react-redux";
import SearchBar from "../Search/SearchBar";
import {logoutUser} from "../../store/slice/userSlice";

const Header = ({isActiveSearch, setIsActiveSearch}) => {
    const {userData} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <header>
            <div className='left-nav-bar'>
                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <Link to="/browse"> Accueil</Link>
                            <Link to="/movies"> Films</Link>
                            <Link to="/series"> Series</Link>
                            <Link to="/watchlist/movies"> Ma liste de films</Link>
                            <Link to="/watchlist/series"> Ma liste de séries</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right-nav-bar">
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <div className="search-btn">
                                <SearchBar isActiveSearch={isActiveSearch}/>
                                <span
                                    onClick={() => setIsActiveSearch(!isActiveSearch)}
                                    style={{opacity: `${isActiveSearch ? 0 : 1}`}}
                                    className='glass-btn'
                                ></span>

                            </div>
                        </li>
                        {userData &&
                            <li >
                                <div className='profil-badge' onClick={() => dispatch(logoutUser())}>
                                    <img src={`https://image.tmdb.org/t/p/w45${userData.avatar.tmdb.avatar_path}`}
                                         alt=""/>
                                    <p>Déconnexion</p>
                                </div>

                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;