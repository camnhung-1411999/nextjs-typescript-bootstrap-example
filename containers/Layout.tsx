import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <div style={ { minHeight: '90vh' } }>
      { children }
    </div>
    <Footer />
  </>
);

export default Layout;
