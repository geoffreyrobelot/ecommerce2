import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';



function Navbar({click}) {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    };

    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <Link to="/" className="logo_link">
                    <h2>
                        E-Shop
                    </h2>
                </Link>
            </div>

            <ul className="navbar_links">
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        Panier
                        <span className="cartlogo_badge"> ({getCartCount()})</span>
                    </Link>
                </li>

                <li>
                    <Link to="/" className="shop_link">
                        <i className="fas fa-t-shirt"></i>
                        Magasin
                    </Link>
                </li>
            </ul>
            
            <div className="menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
