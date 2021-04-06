import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductCard.scss';

let $ = require('jquery');

function ProductCard(props) {
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
                <h3 className="product-title">{props.product.title}</h3>
                <h4 className="product-price">{props.currencyPrefix + props.product.price}</h4>
            </div>
            
        </Link>
    )
}

const handleCardClick = (props) => {
    props.notify(props.product.id);
}

const formatWithHyphen = (productTitle) => {
    //ew ew ewww regex get it off getitoofffff!!
    const firstPass = productTitle.replace(/ /g, "-");
    const secondPass = firstPass.replace(/\./g, "-");
    return secondPass.replace(/,/g, "-"); 
}

export default ProductCard;
