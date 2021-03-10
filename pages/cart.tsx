import React from 'react';
import {
    Row, Col, Table, Button,
} from 'react-bootstrap';

export default function cart() {
    return (
        <Row className='cart-container'>
            <Col md={8} >
                <div>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Bắt đầu</th>
                                <th>Kết thúc</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Row>
                                        <Col md={6}>
                                            <img src='https://apollotran.com/demo/at_meubles_demo/79-cart_default/printed-chiffon-dress.jpg' width='100' />
                                        </Col>
                                        <Col md={6}>
                                            Fresh Strawberries
                            </Col>
                                    </Row>
                                </td>
                                <td>$ 36.00</td>
                                <td>1</td>
                                <td>00:24 2/1/2021</td>
                                <td>00:24 2/1/2021</td>
                                <td>$ 36.00</td>
                            </tr>
                            <tr>
                                <td>
                                    <Row>
                                        <Col md={6}>
                                            <img src='https://apollotran.com/demo/at_meubles_demo/79-cart_default/printed-chiffon-dress.jpg' width='100' />
                                        </Col>
                                        <Col md={6}>
                                            Fresh Strawberries
                            </Col>
                                    </Row>
                                </td>
                                <td>$ 36.00</td>
                                <td>1</td>
                                <td>00:24 2/1/2021</td>
                                <td>00:24 2/1/2021</td>
                                <td>$ 36.00</td>
                            </tr>
                            <tr className="pt-5">
                                <td><div className="input-group border rounded-pill p-1">
                                    <input
                                        type="search"
                                        placeholder="Nhập mã giảm giá"
                                        aria-describedby="button-addon3" className="form-control bg-none border-0" />
                                    <div className="input-group-append border-0">
                                    </div>
                                </div></td>
                                <td>
                                    <div className="input-group border rounded-pill p-1">
                                        <button
                                            className="form-control bg-none border-0">Áp dụng</button>
                                        <div className="input-group-append border-0">
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </Col>
            <Col md={4} style={{ border: '1px solid #dbdcdc', minHeight: '30vh' }}>
                <div className="total-cart">
                    <div className='cart-total-item'>
                        <div>
                            <a style={{ float: 'right' }}>Thay đổi</a>
                            <div className='fw-bold'>ĐỊA CHỈ NHẬN HÀNG</div>
                        </div>
                        <div className='fw-bold'>
                            Doan Thi Cam Nhung | 0334558099
                        </div>
                        <div>
                            123 Nguyễn Văn A, Phường 1, Quận 1, TP HCM
                        </div>
                    </div>
                    <div>
                        <div style={{ float: 'right' }}>30.000</div>
                        <div >Tổng hóa đơn</div>
                    </div>
                    <div className='cart-total-item'>
                        <div style={{ float: 'right' }}>- 2.000</div>
                        <div >Mã giảm</div>
                    </div>
                    <div>
                        <div style={{ float: 'right' }}>28.000</div>
                        <div >TỔNG</div>
                    </div>
                    <div className='mt-5'>
                        <Button style={{ width: '100%' }}> THUÊ HÀNG</Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
