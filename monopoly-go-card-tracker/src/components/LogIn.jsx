import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function parseJwt (token) {
   var base64Url = token.split('.')[1];
   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

function LogIn() {
    const responseMessage = (response) => {
        console.log(JSON.stringify(parseJwt(response.credential)));
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