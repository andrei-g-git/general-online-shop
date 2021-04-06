import React from 'react';
import star from '../assets/icons/star-with-five-points.png';
import {withRouter} from "react-router-dom";

function ProductPage(props) {
    return (
        <div>
            <h2 id="product-title">
                {props.product.title}
            </h2>

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
                            iterateStars().map((element, index) => 
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
        </div>
    )
}

const iterateStars = (maxStars) => {
    // const starDummyArray = [];
    // for(var i = 0; i < maxStars; i++){ //this isn't state
    //     starDummyArray
    // }
    return Array.from(Array(maxStars).keys());
}

export default withRouter(ProductPage);
