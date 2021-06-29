import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    
    const {name, img, price, star, stock, seller, features} = props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p>by: {seller}</p>
                <div className="product-details">
                    <div>
                        <h3 className="product-price">$ {price}</h3>
                        <p>only {stock} left in stock - order soon</p>
                        <button className="main-button" onClick ={()=> props.handleAddProduct(props.product)}>
                            <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                    <div className="product-features">

                        <h3>Features</h3>
                        <ul>
                            {features.map(item => <li key={item.value}> {item.description} : {item.value} </li>)}
                        </ul>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Product;