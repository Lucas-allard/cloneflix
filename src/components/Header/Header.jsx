import './header.scss';
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/Logo_cloneflix.png';
import {useSelector} from "react-redux";
import SearchBar from "../Search/SearchBar";

const Header = ({isActiveSearch, setIsActiveSearch}) => {
    const {userData} = useSelector(state => state.user);

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
                            <Link to="/watchlist"> Ma liste</Link>
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
                        {/*{userData &&*/}
                        {/*    <li>*/}
                        {/*        <Link to="/profile">*/}
                        {/*            <div className='profil-badge'>*/}
                        {/*                <img src={`https://image.tmdb.org/t/p/w45${userData.avatar.tmdb.avatar_path}`}*/}
                        {/*                     alt=""/>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*}*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;