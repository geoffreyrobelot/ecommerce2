import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import {useSelector} from 'react-redux';


const Sidebar = ({ show, click }) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    };

    const sidebarClass = ['sidebar'];

    if(show) {
        sidebarClass.push("show");
    }
    return <div className={sidebarClass.join(' ')}>
        <ul className="sidebar_links" onClick={click}>
            <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Panier <span className="sidebar_panier">{getCartCount()}</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">Magasin</Link>
            </li>
        </ul>
    </div>;
}

export default Sidebar;
