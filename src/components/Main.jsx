import React, { Component } from 'react';
import Navbar from './Navbar';
import FeaturedContent from '../routes/FeaturedContent';
import Footer from './Footer';
import Cart from '../routes/Cart';
import * as actions from '../js/actions';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { formatWithHyphen } from '../js/format';
import ProductPage from '../routes/ProductPage';
import UserLogin from '../routes/UserLogin';
import SearchPage from '../routes/SearchPage';
import '../css/Main.scss';

let $ = require('jquery');
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
            <div id="main"
                onTouchStart={this.props.handleTouchStart}
                onTouchMove={this.props.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
            >
                <Navbar navSliderOpen={this.props.navSliderOpen}></Navbar>

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
                                        userId={this.props.userId}
                                    />
                                )
                                :
                                <div></div>
                        }}
                    />

                    <Route path="/search">
                        <SearchPage />
                    </Route>

                    <Route path="/login">
                        <UserLogin awefeawf={345}>

                        </UserLogin>
                    </Route>

                    <Route path="/cart">
                        <Cart products={this.props.products}>

                        </Cart>
                    </Route>

                    {/* THIS ISN"T ROUTING although the link changes --- TEST THE MATCHERS */}
                    <Route path="/search/result"> {/* //the result string should be dynamic : the search query formatted with hyphens */}
                        <FeaturedContent
                                products={this.props.searchedProducts}
                                currencyPrefix={this.currency.prefix} 
                        >
                        </FeaturedContent>
                    </Route>
                </Switch>

            </div>
        )
    }

    componentDidMount(){ //this should probably be in the featuredcontent route?
        $.ajax({
            url: "/api/products",
            type: "GET",
            success: (response) => this.props.fetchProducts(response),
            dataType: "json"
        });



        //test
        // $.ajax({
        //     url: "/api/products/search",
        //     type: "POST",
        //     data: {
        //         title: "mens"
        //     },
        //     success: response => console.log(response)
        // })
    }

    handleTouchEnd = () => {
        const startX = this.props.touchStartX;
        const moveX = this.props.touchMoveX;

        if((startX < 90) && (startX + 100) < moveX){
            console.log("right");

            this.props.openNavSlider();

        } else if((startX - 100) > moveX){
            console.log("left");

            this.props.closeNavSlider(); //   ?
        }
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.databaseReducer.products,
        touchStartX: state.uiReducer.touchStartX,
        touchStartY: state.uiReducer.touchStartY,
        touchMoveX: state.uiReducer.touchMoveX,
        touchMoveY: state.uiReducer.touchMoveY,
        navSliderOpen: state.uiReducer.navSliderOpen     ,
        userId: state.customerReducer.userId,   //I have to be careful with this, must ensure it's up-to-date at 
                            //all times (it's needed because purchases should be optionally made without an account)
        searchedProducts: state.databaseReducer.searchedProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProducts: (products) => {
            dispatch(actions.productsLoaded(products));
        },
        handleTouchStart: (event) => {
            dispatch(actions.touchStarted({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            }));
        },
        handleTouchMove: (event) => {
            dispatch(actions.touchMoved({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            }));
        },
        openNavSlider: () => {
            dispatch(actions.navSliderOpened(true));
        },
        closeNavSlider: () => {
            dispatch(actions.navSliderOpened(false));
        }                 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);