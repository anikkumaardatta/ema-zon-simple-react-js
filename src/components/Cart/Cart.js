import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <p className='cart_title'>Odered Summary</p>
            <div className="cart_info">
                <p>Seleted items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Cart;