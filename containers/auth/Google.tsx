import React from 'react';
import GoogleLogin from 'react-google-login';

export default function Google() {
    const responseGoogle = (response) => {
        console.log(response);
    };
    return (
        <>
            <GoogleLogin
                clientId='814331646531-1cusjvuaad9pvhuntn4iv59avs6vbmaq.apps.googleusercontent.com'
                buttonText='LOGIN WITH GOOGLE'
                render={(renderProps) => (
                    <a onClick={renderProps.onClick} className='social'>G+
                    </a>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </>
    );
}
