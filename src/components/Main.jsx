import React, { Component } from 'react';
import Navbar from './Navbar';
import FeaturedContent from './FeaturedContent';
import Footer from './Footer';
import * as actions from '../js/actions';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { formatWithHyphen } from '../js/format';
//test
import ProductPage from '../routes/ProductPage';

let $ = require('jquery');

//const CurrencyContext = React.createContext();

class Main extends Component {
    constructor(){
        super();

        this.currency = {
            prefix: "€",
            type: "euro"
        }

        //delete
        this.state = {
            testProduct: {}
        }
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/">
                        <FeaturedContent
                            products={this.props.products}
                            currencyPrefix={this.currency.prefix} //I actually don't mind doing this if it's just 1 or two levels down
                        >
                        </FeaturedContent>
                    </Route>

                    <Route path="/products/:title"
                        render={routeProps => {
                            const paramTitle = routeProps.match.params.title;
                          
                            const products = this.props.products;
                            const productsArrayWithOneElement = products   
                                .filter(product => formatWithHyphen(product.title) === paramTitle);
                            const product = productsArrayWithOneElement[0];

                            return typeof product !== "undefined"
                                ? (
                                    <ProductPage
                                        currencyPrefix = {this.currency.prefix}
                                        product={product}
                                    />
                                )
                                :
                                <div></div>
                        }}
                    />

                </Switch>

                <Footer></Footer>

            </div>
        )
    }

    componentDidMount(){
        $.ajax({
            url: "/api/products",
            type: "GET",
            success: (response) => this.props.fetchProducts(response),
            dataType: "json"
        })
    }

    componentDidUpdate(){
        console.log(this.state.testProduct.description)
    }

    // handleClickDelete = () => {
    //     $.ajax({
    //         url: "/api/products/3",
    //         type: "GET",
    //         success: (response) => {
    //             this.setState({testProduct: response});
    //             console.log(response.description) //async, so it doesn't get anything yet?
    //         },
    //         dataType: "json"
    //     })        
    // }
}

const mapStateToProps = (state) => {
    return {
        products: state.databaseReducer.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProducts: (products) => {
            dispatch(actions.productsLoaded(products))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);