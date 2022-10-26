import './profilSelector.scss';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../store/slice/userSlice";
import {Link} from "react-router-dom";

function ProfilSelector(props) {
    const {data} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    useEffect(() => {
    }, [data]);

    return (
        <div className='centered-div'>
            <div className='list-profils'>
                <h1>Qui est-ce ?</h1>
                {data &&
                    <ul>
                        <li>
                            <div>
                                <Link to='/browse' className="profil">
                                    <div className='profil-badge'>
                                        <img src={`https://image.tmdb.org/t/p/w200${data.avatar.tmdb.avatar_path}`} alt=""/>
                                    </div>
                                    <p>{data.username}</p>
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