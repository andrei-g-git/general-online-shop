import * as actionTypes from './actionTypes';

const initialState = {
    loggedIn: false,
    userId: -1 
}

//ON LOGOUT USER ID MUST RETURN TO -1
const customerReducer = (
    state: {
        loggedIn: boolean, 
        userId: number
    } = initialState, 
    action: {
        type: string, 
        payload: any
    }
) => {
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