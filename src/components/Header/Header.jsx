import './header.scss';
import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/Logo_cloneflix.png';
import {useSelector} from "react-redux";

const Header = () => {
    const {data} = useSelector(state => state.user);
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
                            <Link to="/favoris"> Ma liste</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right-nav-bar">
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <Link to="/search" className="search-btn">
                                <span></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <div className='profil-badge'>
                                    <img src={`https://image.tmdb.org/t/p/w45${data.avatar.tmdb.avatar_path}`} alt=""/>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;