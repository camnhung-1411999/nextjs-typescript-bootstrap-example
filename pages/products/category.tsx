import React from 'react';
import ProductsList from '../../components/products/ProductsList';
import Header from '../../components/Header';
import FilterCategory from '../../components/filters/FilterCategory';

export default function Category() {
    const mockupData = {
        payload: [
            {
                title: 'Title 1',
                price: '19.99',
                review: '4',
                img: '/no_img.jpg',
            },
            {
                title: 'Title 2',
                price: '19.99',
                review: '4',
                img: '/no_img.jpg',
            },
            {
                title: 'Title 3',
                price: '19.99',
                review: '4',
                img: '/no_img.jpg',
            },
            {
                title: 'Title 4',
                price: '19.99',
                review: '4',
                img: '/no_img.jpg',
            },
            {
                title: 'Title 5',
                price: '19.99',
                review: '4',
                img: '/no_img.jpg',
            },
            {
                title: 'Title 6',
                price: '19.99',
                review: '4',
                img: '/no_img.jpg',
            },
            {
                title: 'Title 7',
                price: '19.99',
                review: '4',
                img: '/no_img.jpg',
            },
            {
                title: 'Title 8',
                price: '19.99',
                review: '4',
                img: '/no_img.jpg',
            },
        ],
    };

    return (
        <div>
            <Header/>
            <div className = "container">
                <div className="row">
                    <div className="col-sm-2">
                        <div>
                            <FilterCategory/>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <ProductsList data={mockupData}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
