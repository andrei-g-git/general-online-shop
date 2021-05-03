import * as actionTypes from './actionTypes';

const initialState = {
    products: [], 
    cart: [],
    searchedProducts: []
}

export const databaseReducer = ( state = initialState, action) => {
    switch(action.type){
        case actionTypes.PRODUCTS_LOADED:
            return{
                ...state,
                products: action.payload
            }
        case actionTypes.CART_LOADED:
            return{
                ...state,
                cart: action.payload
            }
        case actionTypes.SEARCHED_PRODUCTS_LOADED:
            return{
                ...state,
                searchedProducts: action.payload
            }
        default:
            return state;
    }
    
}