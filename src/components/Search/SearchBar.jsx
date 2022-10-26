import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './searchBar.scss'
import {fetchData} from "../../store/slice/userSlice";
import {useNavigate} from "react-router-dom";

const SearchBar = ({isActiveSearch}) => {
    const {multiSearch} = useSelector(state => state.user.search)
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchData(searchValue));
        navigate('/search')
    }
    return (
        <form
            style={{opacity: `${isActiveSearch ? 1 : 0}`}}
            onSubmit={(e) => onHandleSubmit(e)}
        >
            <span className='search-icon'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
                type="text"
                placeholder="Titres, personnes, genres "
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <input
                type="submit"
                style={{display:"none"}}
            />
        </form>
    );
}

export default SearchBar;