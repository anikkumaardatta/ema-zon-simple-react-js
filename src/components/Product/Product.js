import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const {name, price, img, ratings, seller, ratingsCount} = props.product;
    return (
        <div className='product'>
        <img src={img} alt="" />
            <div className="product_details">
                <p className='product_title'>{name}</p>
                <p className='product_price'>Price: $<span>{price}</span></p>
                <small>Seller: {seller}</small><br />
                <small>Ratings: {ratings} Stars</small><br />
                <small>Total {ratingsCount} rating.</small>
            </div>
            <button className='button_cart'>
                Add To Cart
            </button>
            
        </div>
    );
};

export default Product;