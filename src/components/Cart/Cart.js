import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, product) => total + product.price , 0);
    

    let shipping = 0;
    if (total < 12){
        shipping = 10.99;
    }
    else if (total < 35 ){
        shipping = 4.99;
    }
    else if (total > 35){
        shipping = 0;
    }

    const beforeTax = total + shipping;
    const tax = total * .1;

    const grandTotal = total + shipping+ tax;

    
    const formatNumber = number =>{
        const precision = number.toFixed(2);
        return Number(precision);
    }

    return (
        <div className="cart-section">
            <h2 className="cart-title">ORDER SUMMERY</h2>
            <h3>Items Order: {cart.length}</h3>
            <table>
                <tr>
                    <td>Products Price :</td> <td>{formatNumber(total)}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling: </td><td>{formatNumber(shipping)}</td>
                </tr>
                <tr>
                    <td><b>Total Before Tax: </b> </td> <td><b>{formatNumber(beforeTax)}</b></td>
                </tr>
                <tr>
                    <td>Estimated Tax: </td> <td>{formatNumber(tax)}</td>
                </tr>
                <tr class="total-price">
                    <td >Order Total: </td> <td>{formatNumber(grandTotal)}</td>
                </tr>
            </table>
        </div>
    );
};


export default Cart;

