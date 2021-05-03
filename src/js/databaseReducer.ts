import * as actionTypes from './actionTypes';
import { Product, Cart } from '../interfaces/Data';

const initialState = {
    products: [], 
    cart: [],
    searchedProducts: []
}

export const databaseReducer = ( 
    state: {
        products: Product[], 
        cart: Cart[], 
        searchedProducts: Product[]
    } = initialState, 
    action: {
        type: String, 
        payload: any
    }
) => {
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