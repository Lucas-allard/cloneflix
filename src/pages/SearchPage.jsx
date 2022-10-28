import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import SearchResults from "../components/Search/SearchResults";
import {useDispatch} from "react-redux";
import {isAuthenticated} from "../store/slice/userSlice";

const SearchPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isAuthenticated())
    }, [])

    return <SearchResults/>
}
    export default SearchPage;