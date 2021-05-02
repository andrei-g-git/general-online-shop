import React from 'react';
import Search from './Search';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import * as actions from '../js/actions';
import { withRouter } from 'react-router-dom';

class ProductSearch extends React.Component {
    render(){
        return (
            <div id="product-search">
                <Search></Search>
                <SearchForm route="/api/products/search"
                    notify={this.handleSearchQuery}
                />
            </div>
        )
    }

    handleSearchQuery = (searchResult) => {
        this.props.fetchQuery(searchResult);
        this.props.history.push("/search/result");
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
