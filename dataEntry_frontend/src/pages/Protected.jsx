import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from '../utils/LoginContextProvider';

const Protected = ({ children }) => {
    const { isLoggedIn } = useContext(LoginContext);

    return isLoggedIn ? children : <Navigate to="/login" />;

};

export default Protected;