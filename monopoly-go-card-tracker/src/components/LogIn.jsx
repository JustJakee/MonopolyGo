import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function LogIn() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div className="login">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
export default LogIn;