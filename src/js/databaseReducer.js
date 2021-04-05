import * as actionTypes from './actionTypes';

const initialState = {
    products: []
}

export const databaseReducer = ( state = initialState, action) => {
    switch(action.type){
        case actionTypes.PRODUCTS_LOADED:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
    
}