import React from 'react';
import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetail } from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/cartAction'; 

function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);

    const { loading, error, product } = productDetails;

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push('/cart');
    }

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetail(match.params.id))
        }
    }, [dispatch, product, match]);

    return (
        <div className="productscreen">

            {loading ? (
                <h2>Chargement...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (

                        <>

                            <div className="productscreen_left">
                                <div className="left_image">
                                    <img src={product.image}
                                    alt={product.name} />
                                </div>
                            </div>

                            <div className="left_info">
                                <p className="left_name">{product.name}</p>
                                <p>Prix : {product.price} €</p>
                                <p>Description : {product.description}</p>
                            </div>

                            <div className="productscreen_right">
                                <div className="right_info">
                                    <p>Prix : <span>{product.price}</span></p>
                                    <p>Statut : <span>{ product.stock > 0 ? "En stock" : "Rupture de stock" }</span></p>
                                    <p>Quantité :
                                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.stock).keys()].map((x) => (
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            ))}
                                        </select>
                                    </p>
                                    <p><button type="button" onClick={addToCartHandler}>Ajouter au panier</button></p>
                                </div>
                            </div>


                        </>


                    )}


        </div>
    );
};

export default ProductScreen
