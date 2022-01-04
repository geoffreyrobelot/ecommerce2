import React from 'react';
import './HomeScreen.css';
import Product from '../components/Product';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { getProducts as listProducts } from '../redux/actions/productAction'; 

function HomeScreen() {
    
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() =>  {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen_title">Produits</h2>
            <div className="homescreen_products">
                {loading ? (
                    <h2>Chargement...</h2>
                    ) : error ? (
                    <h2>{error}</h2>
                    ) : (
                    
                    products.map((product) => <Product 
                    key={product._id} 
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    />)
                )}
                
            </div>
        </div>
    )
}

export default HomeScreen
