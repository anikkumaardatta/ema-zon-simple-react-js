import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header_nav'>
                <div className="nav_container">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav_menu">
                        <a href="/shop">Shop</a>
                        <a href="/orders">Orders</a>
                        <a href="/inventory">Inventory</a>
                        <a href="/about">About</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;