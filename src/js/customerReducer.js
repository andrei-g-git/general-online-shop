import * as actionTypes from './actionTypes';

const initialState = {
    loggedIn: false
}

const customerReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOGGED_IN:
            return{
                ...state,
                loggedIn: action.payload
            }
        default:
            return state;
    }
}

export {customerReducer};