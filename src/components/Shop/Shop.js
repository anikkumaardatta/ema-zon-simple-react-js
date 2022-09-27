import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, steCart] = useState([]);

    const [price, setPrice] = useState([]);
    // cart.map(pro => setPrice(pro.price))
    // console.log(price);
    // const price = ()=>{
    //     price + 
    // }

    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    const hendleAddToCart = (product) => {
        const newCart = [...cart, product]
        steCart(newCart)
        newCart.map(pro => setPrice(pro.price));
        const newPrice = [...price, ]

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
                    <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;