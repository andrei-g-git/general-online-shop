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
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                {/* <CurrencyContext.Provider value={this.currency.prefix}> */}
                    <FeaturedContent
                        products={this.props.products}
                        currencyPrefix={this.currency.prefix} //I actually don't mind doing this if it's just 1 or two levels down
                    >
                    </FeaturedContent>
                {/* </CurrencyContext.Provider> */}
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