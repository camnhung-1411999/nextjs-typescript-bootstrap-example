import React from 'react';
import AuthProvider from '../contexts/auth/auth.provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/auth.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
