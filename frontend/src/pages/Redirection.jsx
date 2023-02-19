import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Redirection = ({ children }) => {
    const { user } = UserAuth();
    return user ? <Navigate to="/account" /> : children;

};

export default Redirection;