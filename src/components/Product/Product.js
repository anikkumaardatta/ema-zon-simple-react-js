import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
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
            <button onClick={()=>props.hendleAddToCart(props.product)} className='button_cart'>
                Add To Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
            
        </div>
    );
};

export default Product;