import React from 'react';
import Layout from 'containers/Layout';
import AuthProvider from '../contexts/auth/auth.provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/auth.css';
import '../styles/header.css';
import '../styles/product.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
