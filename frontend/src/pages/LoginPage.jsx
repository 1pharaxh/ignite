import React, { useEffect } from "react";
import { GoogleButton } from 'react-google-button'
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'

function LoginPage() {
    const { googleSignIn, user } = UserAuth();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
    );
}

export default LoginPage;