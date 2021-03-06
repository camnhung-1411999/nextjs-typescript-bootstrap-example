import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const handleOnlickLogo = () => {
    router.push('/');
  };

  return (
    <Navbar expand="lg" id = "header">
      <div className='container'>
        <img src='/rent-logo.png' width={100}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto font-weight-bold">
            <Nav.Link href="/">Trang Chủ</Nav.Link>
            <Nav.Link href="/introduce">Giới thiệu</Nav.Link>
            <Nav.Link href="/product">Sản Phẩm</Nav.Link>
            <Nav.Link href="/contact">Liên Hệ</Nav.Link>
            <Nav.Link href="/indentureSearch">Tra Cứu Hợp Đồng</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div >
    </Navbar >
  );
};

export default Header;
