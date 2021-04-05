import * as actionTypes from './actionTypes';

export const productsLoaded = (products) => {
    return {
        type: actionTypes.PRODUCTS_LOADED,
        payload: products 
    }
}