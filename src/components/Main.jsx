import React, { Component } from 'react';
import Navbar from './Navbar';
import FeaturedContent from './FeaturedContent';
import Footer from './Footer';
import * as actions from '../js/actions';
import { connect } from 'react-redux';

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
                    <FeaturedContent
                        products={this.props.products}
                        currencyPrefix={this.currency.prefix} //I actually don't mind doing this if it's just 1 or two levels down
                    >
                    </FeaturedContent>

                    <button style={{position: 'fixed', top: 0, zIndex: 9999}}
                        onClick={this.handleClickDelete}
                    >
                        Id Click
                    </button>
                <Footer></Footer>

                {
                    this.state.testProduct !== {}
                        ? 
                        <div>
                            <img src={this.state.testProduct.image}
                                alt="n/a"
                                width='200px'
                                style={{position: 'fixed', top: 0, right: 0, zIndex: 9999}}
                            />

                            <h1>{this.state.testProduct.description}</h1>
                        </div>
                        :
                        <div></div>
                }
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

    handleClickDelete = () => {
        $.ajax({
            url: "/api/products/3",
            type: "GET",
            success: (response) => {
                this.setState({testProduct: response});
                console.log(response.description) //async, so it doesn't get anything yet?
            },
            dataType: "json"
        })        
    }
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