import React from 'react';
import '../css/CartItem.scss';

function CartItem(props) {
    return ( //still needs euro suffix for most quantities
        props.quantity ? 
            <div className="cart-item"> 
                <h1>{props.title}</h1>
                <img src={props.image} alt="n/a"/>
                <div className="quantity-modifier"></div>
                <div className="subtotal-group">
                    <label>Price:</label>
                    <p>{props.price}</p>
                    <label>Discount:</label>
                    <p>{props.discount}</p>
                    <label>Shipping:</label>
                    <p>{props.currencyPrefix} + 8.50</p>
                    <label>Subtotal:</label>
                    <p>{props.price - props.discount + 8.50}</p>
                </div>
            </div>
            :
            <div></div>
    )
}

export default CartItem;
