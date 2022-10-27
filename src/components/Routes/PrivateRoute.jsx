import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useSelector(state => state.user)
    return isAuthenticated ?
        <Outlet/>:
        <Navigate to="/" />;

}

export default PrivateRoute;