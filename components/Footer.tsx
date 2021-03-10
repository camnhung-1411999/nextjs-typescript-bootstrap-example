/* eslint-disable max-len */
import React from 'react';

export default function Footer() {
    return (
        <footer className="app-footer mt-5">
        <div className=" pt-5 border-bottom">
          <div className="row">
            <div className="col-md-3 col-sm-12 mb-3 text-center">
                <img src={'/rent-logo.png'} className="img-fluid" width="200px" height="60px"/>
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                <h5 className="mb-4 font-weight-bold text-uppercase">Chăm sóc khách hàng</h5>
                <ul className="list-group">
                  <li
                  className="list-group-item bg-transparent border-0 p-0 mb-2">
                      <a href="https://www.facebook.com/cams.nhung">Trung Tâm Trợ Giúp</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="">Rent mart blog</a></li>
                  <li
                  className="list-group-item bg-transparent border-0 p-0 mb-2">
                      <a href="../workforce/workforce-organization-management-hr.html">Workforce</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung"> Rent mall</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Chăm sóc khách hàng</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Thanh toán</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Hướng dẫn thuê</a></li>
                  <li
                  className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Hướng dẫn cho thuê</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
                <h5 className="mb-4 font-weight-bold text-uppercase">Về rent mart</h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Giới thiệu</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Điều khoản</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Tuyển dụng</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Bảo mật</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                <h5 className="mb-4 font-weight-bold text-uppercase">Ứng dụng</h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung">Android</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://www.facebook.com/cams.nhung"> IOS</a></li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f184c0b68a2d385feb5d70a76396230b.png"/></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                <h5 className="mb-4 font-weight-bold text-uppercase">Kết nối</h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/cams.nhung"><i className="fa fa-linkedin mr-1" /> LinkedIn</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/cams.nhung"><i className="fa fa-twitter mr-1" /> Twitter</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/cams.nhung"><i className="fa fa-reddit mr-1" /> Reddit</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/cams.nhung"><i className="fa fa-google-plus mr-1" /> Google+</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/cams.nhung"><i className="fa fa-github mr-1" /> Github</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/cams.nhung"><i className="fa fa-medium mr-1" /> Medium</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/cams.nhung"><i className="fa fa-facebook mr-1" /> Facebook</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/cams.nhung"><i className="fa fa-youtube mr-1" /> YouTube</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="py-4 d-flex justify-content-center align-items-center">
                <a className="mr-4" href="../privacy.html">coppyright@ 2021 &amp; Renten team</a>
                <a href="../sitemap.xml">FIT-HCMUS</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
