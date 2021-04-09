import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.scss';

function Footer() {
    return (
        <footer id="footer">
            <Link className="footer-link col-1" to="/careers">Careers</Link>
            <Link className="footer-link col-1" to="/blog">Blog</Link>
            <Link className="footer-link col-1" to="/about">About eShop</Link>
            <Link className="footer-link col-2" to="/sell-products">Sell products on eShop</Link>
            <Link className="footer-link col-2" to="/sell-on-eShop-business">Sell on eShop business</Link>
            <Link className="footer-link col-3" to="/business-card">eShop Business Card</Link>    
            <Link className="footer-link col-3" to="/shop-with-points">Shop with Points</Link>
            <Link className="footer-link col-3" to="/balance">Reload Your Balance</Link>    

            <div className="empty-cell"></div>    
        </footer>
    )
}

export default Footer;
