import * as actionTypes from './actionTypes';

const initialState = {
    loggedIn: false,
    userId: -1 
}

const customerReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOGGED_IN:
            return{
                ...state,
                loggedIn: action.payload.loggedIn,
                userId: action.payload.id
            }
        default:
            return state;
    }
}

export {customerReducer};