import React from 'react';
import Header from '../Header';
import ProductItem from './ProductItem';
import {Pagination} from 'antd';
import 'antd/dist/antd.css';
import {
    Button, ButtonGroup, Dropdown, DropdownButton
} from 'react-bootstrap';

export default function ProductsList({ data }) {
    console.log(data);
    let listItems = data.payload.map((item) => <ProductItem data = {item}/>);

    return (
        <div>
            <div id="product-list">
                <div className="product-list-filter">
                    <div className="product-list-sort-container">
                        <h5>Sắp xếp theo</h5>
                        <div className="product-list-buttons-area">
                            <Button variant="light" size="sm">Phổ Biến</Button>
                            <Button variant="light" size="sm">Mới Nhất</Button>
                            <Button variant="light" size="sm">Bán Chạy</Button>

                            <DropdownButton title="Giá" as={ButtonGroup} id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1">Giá: thấp đến cao</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Giá: cao đến thấp</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <div className="product-list-pagination">
                        <Pagination simple defaultCurrent={2} total={50}/>
                    </div>
                </div>
                <div className="product-list-result">
                        {listItems}
                </div>
                <div id="product-list-pagination-bottom">
                    <Pagination defaultCurrent={1} total={50}/>
                </div>
            </div>
        </div>
    );
}
