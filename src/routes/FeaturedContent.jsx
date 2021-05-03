import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../css/FeaturedContent.scss';

let $ = require('jquery');

function FeaturedContent(props){

    let [, setState] = useState();
    return (
        <div>
            <ul id="product-grid">
                { 
                    typeof props.products !== "undefined"
                        ?
                            props.products.map(product => 
                                <ProductCard
                                    key={product.id}
                                    currencyPrefix = {props.currencyPrefix}
                                    product={product}
                                    notify={() => {cardWasClicked(product.id); setState({})}} //forgot why I'm setting the state...  maybe it's to force the page to re-render...
                                >
                                </ProductCard>   
                            )
                        :
                            <div></div>
                    
                } 
            </ul>
            
        </div>
    )
}

const cardWasClicked = (id) => {
    $.ajax({
        url: "/api/products/" + id.toString(),
        type: "GET",
        success: (response) => {

        }
    });

}

export default FeaturedContent;