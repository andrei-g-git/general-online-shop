import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.scss';
import { Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <Container 
            className="container"
            id="footer"
        > 
            <Row>
                <Link className="footer-link col-4" to="/careers">Careers</Link> {/* had class */}
                <Link className="footer-link col-4" to="/sell-products">Sell products on eShop</Link>
                <Link className="footer-link col-4" to="/business-card">eShop Business Card</Link>   
            </Row>

            <Row className="justify-content-between">
                <Link className="footer-link col-4" to="/blog">Blog</Link>                
                <Link className="footer-link col-4" to="/sell-on-eShop-business">Sell on eShop business</Link>
                <Link className="footer-link col-4" to="/shop-with-points">Shop with Points</Link>
            </Row>

            <Row className="justify-content-between">
                <Link className="footer-link col-4" to="/about">About eShop</Link>                
                <Link className="footer-link col-4" to="/balance">Reload Your Balance</Link>    
            </Row> 
        </Container>
    )
}

export default Footer;
