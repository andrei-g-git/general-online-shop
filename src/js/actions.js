import * as actionTypes from './actionTypes';

export const productsLoaded = (products) => {
    return {
        type: actionTypes.PRODUCTS_LOADED,
        payload: products 
    }
}

export const touchStarted = (touchVector) => {
    return{
        type: actionTypes.TOUCH_STARTED,
        payload: {
            x: touchVector.x,
            y: touchVector.y
        }
    }
}

export const touchMoved = (touchVector) => {
    return{
        type: actionTypes.TOUCH_MOVED,
        payload: {
            x: touchVector.x,
            y: touchVector.y
        }
    }
}

export const navSliderOpened = (isOpen) => {
    return{
        type: actionTypes.NAV_SLIDER_OPENED,
        payload: isOpen
    }
} 