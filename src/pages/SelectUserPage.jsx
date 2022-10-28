import React from 'react';
import ProfilSelector from "../components/ProfilSelector/ProfilSelector";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const SelectUserPage = () => {
    const {isAuthenticated} = useSelector(state => state.user);
    const navigate = useNavigate();

    console.log(isAuthenticated)
    return isAuthenticated ? navigate("/browse") : <ProfilSelector/>
}
export default SelectUserPage;



