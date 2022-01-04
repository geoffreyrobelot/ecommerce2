import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product({image, name, description, price, productId}) {
    return (
        <div className="product">
            <img src={image}
            alt={name}
             />

            <div className="product_info">
                <p className="info_name">{name}</p>
                <p className="info_description">
                    {description}
                </p>
                <p className="info_price">{price} €</p>
                <Link to={`/product/${productId}`} className="info_button">Voir</Link>
            </div>
        </div>
    )
}

export default Product;
