import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductCard.scss';

let $ = require('jquery');

function ProductCard(props) {

    let priceClass = "product-price";
    let discountClass = "discount-price";
    if(props.product.discount > 0){
        priceClass = "product-price-strikethrough";
        //discountClass = "blah";
    }
        
    return (
        <Link className="product-card"
            role="button"
            to={"/products/" + formatWithHyphen(props.product.title)}
            onClick={() => handleCardClick(props)}
        >
            <div className="product-pic-container">
                <img className="product-pic" 
                    src={props.product.image} 
                    alt="n/a"
                />
            </div>
            <div className="info-container">
                <h5 className="product-title">{props.product.title}</h5>
                <div className="price-group">
                    <h6 className={priceClass}>{props.currencyPrefix + props.product.price}</h6>
                    {
                        props.product.discount > 0
                            ?
                                <h6 className={discountClass}>
                                    {props.currencyPrefix 
                                        + (
                                            props.product.price 
                                            - props.product.discount
                                        )
                                    }
                                </h6>
                            :
                                <div></div>
                    }
                </div>
            </div>
        </Link>
    )
}

const handleCardClick = (props) => {
    props.notify(props.product.id);
}

const formatWithHyphen = (productTitle) => { //damn I actually don't need this...
    //ew ew ewww regex get it off getitoofffff!!
    const firstPass = productTitle.replace(/ /g, "-");
    const secondPass = firstPass.replace(/\./g, "-");
    return secondPass.replace(/,/g, "-"); 
}

export default ProductCard;
