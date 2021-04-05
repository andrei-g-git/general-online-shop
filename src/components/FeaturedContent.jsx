import React from 'react';
import ProductCard from './ProductCard';
import '../css/FeaturedContent.scss';

function FeaturedContent(props) {

    return (
        <ul id="product-grid">
            { 
                typeof props.products !== "undefined"
                    ?
                        props.products.map(product => 
                            <ProductCard
                                key={product.id}
                                currencyPrefix = {props.currencyPrefix}
                                product={product}
                            >
                            </ProductCard>   
                        )
                    :
                        <div></div>
                
            } 
        </ul>
    )
}

export default FeaturedContent;
