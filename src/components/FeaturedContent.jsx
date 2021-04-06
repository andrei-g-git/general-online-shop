import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Switch, Route } from 'react-router-dom';
import ProductPage from '../routes/ProductPage';
import '../css/FeaturedContent.scss';

//test
import RouterDebugger from './RouterDebugger';

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
                                    notify={() => {cardWasClicked(product.id); setState({})}}
                                >
                                </ProductCard>   
                            )
                        :
                            <div></div>
                    
                } 
            </ul>
            
{/*             <Switch>
                <Route path="/products/:id"
                    render={routeProps => {
                        const intParamId = parseInt(routeProps.match.params.id);
                        const products = props.products;
                        const productsArrayWithOneElement = products   
                            .filter(product => product.id === intParamId);
                        const product = productsArrayWithOneElement[0];

                        return typeof product !== "undefined"
                            ? (
                                <ProductPage
                                    currencyPrefix = {props.currencyPrefix}
                                    product={product}
                                />
                            )
                            :
                            <div></div>
                    }}
                >

                </Route>
            </Switch> */}
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

const test = (routeProps, props) => {
    const intParamId = parseInt(routeProps.match.params.id);
    const products = props.products;
    const productsArrayWithOneElement = products   
        .filter(product => product.id === intParamId);
    const product = productsArrayWithOneElement[0];

    return typeof product !== "undefined"
        ? (
            <ProductPage
                currencyPrefix = {props.currencyPrefix}
                product={product}
            />
        )
        :
        <div></div>
}

export default FeaturedContent;
