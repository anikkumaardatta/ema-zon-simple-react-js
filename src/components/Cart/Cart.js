import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let price = 0;
    let totalShipping =  0;

    for(const product of cart){
        price = price + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const totalTax = (price + totalShipping) * 0.1;
    const totalPrice = price + totalShipping + totalTax;

    cart.map(item => price + (item.price))
    return (
        <div>
            <p className='cart_title'>Odered Summary</p>
            <div className="cart_info">
                <p>Seleted items : </p><span className='value'>{cart.length}</span>
                <p>Price : </p><span className='value'>${price.toFixed(2)}</span>
                <p>Shipping charge : </p><span className='value'>${totalShipping.toFixed(2)}</span>
                <p>Tax : </p><span className='value'>${totalTax.toFixed(2)}</span>
                <p className='total_price'>Total : </p><span className='total_price value'>${totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Cart;