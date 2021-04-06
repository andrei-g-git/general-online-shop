import React from 'react';
import ProductCard from './ProductCard';
import { Switch, Route } from 'react-router-dom';
import '../css/FeaturedContent.scss';

let $ = require('jquery');

function FeaturedContent(props) {

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
                                    notify={cardWasClicked}
                                >
                                </ProductCard>   
                            )
                        :
                            <div></div>
                    
                } 
            </ul>
            
            <Switch>
                <Route>
                    
                </Route>
            </Switch>
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
