import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb.js'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        console.log('product load before fetch');
        fetch('products.json')
        .then(response => response.json())
        .then(data => {setProducts(data)
        console.log('product loaded')})
    },[])

    useEffect(()=>{
        console.log('Local store load before');
        const storedCart = getStoredCart();
        const savedCart = []
        console.log('load fecth data',storedCart);
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
        };
        setCart(savedCart)
        console.log('Local store loaded');
    }, [products])
    const hendleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id);
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