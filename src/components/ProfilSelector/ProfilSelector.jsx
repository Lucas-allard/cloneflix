import './profilSelector.scss';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../store/slice/userSlice";
import {Link} from "react-router-dom";

function ProfilSelector(props) {
    const {userData} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div className='centered-div'>
            <div className='list-profils'>
                <h1>Qui est-ce ?</h1>
                {userData &&
                    <ul>
                        <li>
                            <div>
                                <Link to='/browse' className="profil">
                                    <div className='profil-badge'>
                                        <img src={`https://image.tmdb.org/t/p/w200${userData.avatar.tmdb.avatar_path}`} alt=""/>
                                    </div>
                                    <p>{userData.username}</p>
                                </Link>
                            </div>
                        </li>
                    </ul>
                }
            </div>
        </div>
    );
}

export default ProfilSelector;