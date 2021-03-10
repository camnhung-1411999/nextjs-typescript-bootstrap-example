/* eslint-disable react/display-name */
import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <div className='dropdown-toggle nav-icon'>
              <FontAwesomeIcon
                        icon={ faUser }
                      /> <span className="caret"></span>
              </div>
    {children}
  </div>
));
const Header = () => {
  const router = useRouter();

  const handleOnlickLogo = () => {
    router.push('/');
  };

  return (
    <Navbar expand="lg" id = "header">
      <div className='pl-4'>
      <img src='/rent-logo.png' width={150} onClick={handleOnlickLogo}/>

      </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-md-8 nav-item-center">
            <Nav.Link href="/introduce">Danh mục</Nav.Link>
            <Nav.Link href="/introduce">Cửa hàng</Nav.Link>
            <Nav.Link href="/introduce">Bài viết</Nav.Link>
            <Nav.Link href="/product">Sản Phẩm</Nav.Link>
            <Nav.Link href="/contact">Liên Hệ</Nav.Link>
            <Nav.Link href="/indentureSearch">Điều khoản và dịch vụ</Nav.Link>
          </Nav>
          <Nav className='col-md-3 nav-item-center'>
          <div className="input-group border rounded-pill p-1">
            <input type="search" placeholder="Nhập từ khóa bạn cần tìm?" aria-describedby="button-addon3" className="form-control bg-none border-0"/>
            <div className="input-group-append border-0">
              <button id="button-addon3" type="button" className="btn btn-link text-success"><FontAwesomeIcon
                          icon={ faSearch }
                          className='nav-icon'
                        /></button>
            </div>
          </div>
          </Nav>
          <Nav className='col-md-1 icons'>
          <FontAwesomeIcon
                          icon={ faShoppingCart }
                          className='nav-icon mr-5'
                        />
          <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar >
  );
};

export default Header;
