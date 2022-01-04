import React from 'react';
import './CartScreen.css';
import CartItem from '../components/CartItem';
import {addToCart, removeFromCart} from '../redux/actions/cartAction';
// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

function CartScreen() {
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler  = (id, qty) => {
        dispatch(addToCart(id, qty))
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0) 
    };

    return (
        <div className="cartscreen">
            
            <div className="cartscreen_left">
                <h2>Panier</h2>
                {cartItems.length === 0 ? (
                    <div>Votre panier est vide <Link to="/">Retour</Link></div>
                ) : cartItems.map(item => (
                    <CartItem  
                    key={item.product}
                    item={item} 
                    qtyChangeHandler={qtyChangeHandler} 
                    removeHandler={removeHandler} />
                ))}
            </div>

            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Sous total ({getCartCount()}) produit</p>
                    <p>{getCartSubTotal()} €</p>
                </div>

                <div>
                <button>Paiement 💳</button>
                </div>
            </div>

        </div>
    )
}

export default CartScreen;
