import React from 'react';
import star from '../assets/icons/star-with-five-points.png';
import {withRouter} from "react-router-dom";
import Footer from '../components/Footer';
import '../css/ProductPage.scss';

import {Row, Col, Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let $  = require('jquery');

function ProductPage(props) {
    let priceId = "price";
    if(props.product.discount > 0){
        priceId = "price-strikethrough";
    }
    return (
        <Container className="container"
            id="product-page"
        >
            {/* <div id="product-page"> */}
            <Row className="row">
                <h3 id="product-title"
                    className="col-12"
                >
                    {props.product.title}
                </h3>   
            </Row>

            <Row className="row">
                <img id="product-pic"
                    className="col-12"
                    src={props.product.image}
                    alt="n/a"
                />
            </Row>

            <Row>
                <Col 
                    className="col-6"
                    id="rating-container"
                >
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
                </Col>

                <Col id="price-group"
                    className="col-6"
                >
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
                </Col>
            </Row>

            <Row>
                <p  className="col-12"
                    id="product-description">
                    {props.product.description}
                </p>
            </Row>

            <Row id="add-to-cart-wrapper">
                <Button className="col-8"
                    id="add-to-cart"
                    onClick={() => handleClick(props.product, props.userId)} //must ensure -1 if not logged in
                >
                    {/* <a href="/cart">Add to cart</a> */} {/* I don't need it to do redirect yet... */}
                    Add to cart
                </Button>
            </Row>                


            {/* </div> */}

            
            <Footer></Footer>

        </Container>                    
    )
}

const handleClick = (product, userId) => { //must ensure -1 if not logged in

    if(userId >= 0){ //I don't like tight coupling, I'm not sending '-1' to the server, what kind of shit is that
        $.ajax({
            type: "POST",
            url: "/api/cart/add",
            data: {
                userId: userId,
                productId: product.id
            },
            success: response => {
                console.log(response);
            }
        });
    }
}

const iterateStars = (maxStars) => {
    return Array.from(Array(maxStars).keys());
}

export default withRouter(ProductPage);
