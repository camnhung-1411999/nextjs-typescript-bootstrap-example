import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ProductItem = ({ data }) => (
        <div className="product-miniature">
            <div className="product-thumbnail-container">
                <img width="100%" src={'/no_img.jpg'} alt={'No image'}/>
                <div className="product-info-container">
                    <div className="product-description">
                        <h3 className="product-title">
                            <a>{data.title}</a>
                        </h3>
                        <span>
                            <span className="product-price">$</span>
                            <span className="product-price">{data.price}</span>
                        </span>
                    </div>
                    <ReactStars
                        value={data.review}
                        count={5}
                        onChange={() => {
                        }}
                        size={18}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"/>}
                        halfIcon={<i className="fa fa-star-half-alt"/>}
                        fullIcon={<i className="fa fa-star"/>}
                        activeColor="#ffd700"
                        edit={false}
                    />

                </div>
            </div>
        </div>
    );

export default ProductItem;
