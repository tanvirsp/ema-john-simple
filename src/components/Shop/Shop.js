import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] =useState([]);

    const handleAddProduct = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.key} handleAddProduct ={handleAddProduct} ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart ={cart}></Cart>

            </div>
            
            
        </div>
    );
};

export default Shop;