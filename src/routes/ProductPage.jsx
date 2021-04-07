import React from 'react';
import star from '../assets/icons/star-with-five-points.png';
import {withRouter} from "react-router-dom";
import '../css/ProductPage.scss';

function ProductPage(props) {
    let priceId = "price";
    if(props.product.discount > 0){
        priceId = "price-strikethrough";
    }
    return (
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
        </div>
    )
}

const iterateStars = (maxStars) => {
    return Array.from(Array(maxStars).keys());
}

export default withRouter(ProductPage);
