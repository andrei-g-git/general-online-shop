import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../css/FeaturedContent.scss';
/* import Footer from '../components/Footer'; */
//test
import RouterDebugger from '../components/RouterDebugger';

let $ = require('jquery');

function FeaturedContent(props) {

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
                                    notify={() => {cardWasClicked(product.id); setState({})}} //forgot why I'm setting the state...
                                >
                                </ProductCard>   
                            )
                        :
                            <div></div>
                    
                } 
            </ul>

            {/* <Footer></Footer> */}
            
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