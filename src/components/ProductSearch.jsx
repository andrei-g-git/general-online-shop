import React from 'react';
//import Search from './Search'; //this would actually redirect me to the same page...
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import * as actions from '../js/actions';
import { withRouter } from 'react-router-dom';
import searchIcon from "../assets/icons/search-icon-png-9973.png";

import '../css/ProductSearch.scss'; //actually on the right

class ProductSearch extends React.Component {
    render(){
        return (
            <div id="product-search">
                {/* <Search></Search> */}
                <img id="search-icon"
                    src={searchIcon}
                    alt="n/a"
                    //style={{width:"2rem"}}
                />
                <SearchForm route="/api/products/search"
                    notify={this.handleSearchQuery}
                />
            </div>
        )
    }

    handleSearchQuery = (searchResult) => {
        this.props.fetchQuery(searchResult);
        this.props.history.push("/search-result");
        const bp = 123;
    }
}

const mapStateToProps = (state) => {
    return {
        //searchedProducts: state.dataReducer.searchedProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchQuery: (searchResult) => {
            dispatch(actions.searchedProductsLoaded(searchResult));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductSearch));
