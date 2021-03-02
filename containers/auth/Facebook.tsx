import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default function Facebook() {
    const responseFacebook = (response) => {
        console.log(response);
    };
    return (
        <>
            <FacebookLogin
                textButton=""
                appId='3754633467882560'
                fields='name,email,picture'
                callback={responseFacebook}
                cssClass="social-facebook"
                icon="fa-facebook"
            />
        </>
    );
}
