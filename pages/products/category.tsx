import React from 'react';
import ProductsList from '../../components/ProductsList';
import Header from '../../components/Header';

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
            <div>
                <ProductsList data={mockupData}/>
            </div>
        </div>
    );
}
