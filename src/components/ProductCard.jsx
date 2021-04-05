import React from 'react';
import '../css/ProductCard.scss';

function ProductCard(props) {
    return (
        <div className="product-card">
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
            
        </div>
    )
}

export default ProductCard;
