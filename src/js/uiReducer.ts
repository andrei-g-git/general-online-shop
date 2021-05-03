import * as actionTypes from './actionTypes';
import { UiState } from '../interfaces/Ui';

const initialState = {
    touchStartX: 0,
    touchStartY: 0,
    touchMoveX: 0,
    touchMoveY: 0,
    navSliderOpen: false
}

const uiReducer = (state: UiState = initialState, action: {type: string, payload: any}) => {
    switch(action.type){
        case actionTypes.TOUCH_STARTED:
            return{
                ...state,
                touchStartX: action.payload.x,
                touchStartY: action.payload.y
            }
        case actionTypes.TOUCH_MOVED:
            return{
                ...state,
                touchMoveX: action.payload.x,
                touchMoveY: action.payload.y
            }   
        case actionTypes.NAV_SLIDER_OPENED:
            return{
                ...state,
                navSliderOpen: action.payload
            }         
        default:
            return state;
    }
}

export { uiReducer };