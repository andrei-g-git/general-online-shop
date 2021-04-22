import React from 'react';
import star from '../assets/icons/star-with-five-points.png';
import {withRouter} from "react-router-dom";
import Footer from '../components/Footer';
import '../css/ProductPage.scss';

let $  = require('jquery');

function ProductPage(props) {
    let priceId = "price";
    if(props.product.discount > 0){
        priceId = "price-strikethrough";
    }
    return (
        <div>
            <div id="product-page">
                <h3 id="product-title">
                    {props.product.title}
                </h3>

                <img id="product-pic"
                    src={props.product.image}
                    alt="n/a"
                />
                <div id="rating-container">
                    <label id="rating-label">
                        User Rating:
                    </label>
                    <div id="rating-group">
                        <ul id="stars">
                            {
                                iterateStars(props.product.rating).map((element, index) => 
                                    <img className="star"
                                        src={star}
                                        alt="n/a"
                                        key={index}
                                    />    
                                )
                            }
                        </ul>
                        <p id="rating">
                            {props.product.rating + "/5"}
                        </p>
                    </div>
                </div>

                <div id="price-group">
                    <p id={priceId}>
                        {props.currencyPrefix + props.product.price}
                    </p>
                    
                    {
                        props.product.discount > 0
                            ?
                                <p id="discount">
                                    {props.currencyPrefix 
                                        + (
                                            props.product.price 
                                            - props.product.discount
                                        )
                                    }
                                </p>
                            :
                                <div></div>                            
                    }
                </div>

                <p id="product-description">
                    {props.product.description}
                </p>

                <div id="add-to-cart-wrapper">
                    <button id="add-to-cart"
                        onClick={() => handleClick(props.product, props.userId)} //must ensure -1 if not logged in
                    >
                        {/* <a href="/cart">Add to cart</a> */} {/* I don't need it to do redirect yet... */}
                        Add to cart
                    </button>
                </div>
            </div>

            
            <Footer></Footer>

        </div>                    
    )
}

const handleClick = (product, userId) => { //must ensure -1 if not logged in
    /* 
        need to get the cart id by making a post request (passing the user id) similar to the one in the cart route
        to post the item added to the cart, I only need that cart id and the product id which I already have here
            each add-to-cart request is it's own record so I don't need to pass an id for that, the server should generate 1 dynamically, 
                probably one higher by 1 than the highest existing addToCartId 
        pressing the button multiple times should increase the quantity FOR THE SAME addToCartId IF it's the same product in the same cart
            the server should thus loop all addToCart keys (i guess mysql is declarative so I probably don't need to loop 
                or filter explicitly, no idea how yet), checking if the productId && cartId aren't both present in any record, otherwise 
                    it has to update that record, not make a new one
    */

    if(userId >= 0){ //I don't like tight coupling, I'm not sending '-1' to the server, what kind of shit is that
        $.ajax({
            type: "POST",
            url: "/api/cart/add",
            data: {
                userId: userId,
                productId: product.id
            },
            success: response => {
                console.log(response);
            }
        });
    }
}

const iterateStars = (maxStars) => {
    return Array.from(Array(maxStars).keys());
}

export default withRouter(ProductPage);
