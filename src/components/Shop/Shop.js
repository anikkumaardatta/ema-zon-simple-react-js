import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop_container'>
            <div className="product_container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className="cart_container">
                <h1>This is from cart container</h1>
            </div>
            
        </div>
    );
};

export default Shop;