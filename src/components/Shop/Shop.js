import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, steCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    const hendleAddToCart = (product) => {
        const newCart = [...cart, product]
        steCart(newCart)
    }
    return (
        <div className='shop_container'>
            <div className="product_container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    hendleAddToCart={hendleAddToCart} 
                    ></Product>)
                }
            </div>
            <div className="cart_container">
                    <p className='cart_title'>Odered Summary</p>
                <div className="cart_info">
                    <p>Seleted items: {cart.length}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;