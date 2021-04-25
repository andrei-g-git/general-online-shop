import React from 'react';
import '../css/CartItem.scss';
import minusIcon from '../assets/icons/minus_white.png';
import plusIcon from '../assets/icons/plus_white.png';

function CartItem(props) {

    return ( //still needs euro suffix for most quantities
        props.quantity ? 
            <div className="cart-item"> 
                <h1>{props.title}</h1>
                <img src={props.image} alt="n/a"/>
                <div className="quantity-modifier">
                    <img className="change-quantity"
                        src={minusIcon}
                        alt="n/a"
                        onClick={() => props.notifyQuantity(-1, props.addToCartId)}
                    ></img>

                    <div className="quantity-output">{props.quantity}</div>

                    <img className="change-quantity"
                        src={plusIcon}
                        alt="n/a"
                        onClick={() => props.notifyQuantity(+1, props.addToCartId)}
                    ></img>
                </div>
                <div className="subtotal-group">
                    <label>Price:</label>
                    <p>{props.currencyPrefix}{props.price}</p>
                    <label>Discount:</label>
                    <p>{props.currencyPrefix}{props.discount}</p>
                    <label>Shipping:</label>
                    <p>{props.currencyPrefix}8.50</p>
                    <label>Subtotal:</label>
                    {
                        //something strange happens if the discount price is 0, the decimals go crazy ... this is a 
                        //stop-gap-solution, the final numbers should be retrieved with mysql (at least don't do arithmetic here)
                        props.discount > 0 ?
                            <p>{props.currencyPrefix}{props.price - props.discount + 8.50}</p> //STILL DOESN"T WORK
                        :
                            <p>{props.currencyPrefix}{props.price + 8.50}</p>
                    }
                    
                </div>


            </div>
            :
            <div></div>
    )
}

export default CartItem;
