import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ children }) => {
    const { user } = UserAuth();
    return user ? children : <Navigate to="/" />;

};

export default Protected;