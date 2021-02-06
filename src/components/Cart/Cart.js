import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;
    //total product price
    const total = cart.reduce((total, prd) => total + prd.price , 0)

    //shipping price calculation
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    } else if(total > 15){
        shipping = 4.99;
    } else if( total > 0) {
        shipping = 12.99;
    }

    //tax +VAT calculation
    const tax = total * .10;

    const formatNumber = number => {
        const precision = number.toFixed(2);
        return parseFloat(precision);
    }

    const grandTotal = total + shipping + tax;


    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <h4>Product Price: {formatNumber(total)}</h4>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT = {formatNumber(tax)}</p>
            <h4>Total Price: {formatNumber(grandTotal)}</h4>
        </div>
    );
};

export default Cart;