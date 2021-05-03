import * as actionTypes from './actionTypes';

interface Product { //these can be reusable, should be in separate files
    id: number,
    title: string,
    price: number,
    discount: number,
    description: string,
    category: string,
    image: string,
    rating: number    
}

interface Cart {
    addToCartId: number,
    cartId: number,
    userId: number,
    orderDate: string,
    productId: number,
    quantity: number
}

export const productsLoaded = (products: Product[]) => {
    return {
        type: actionTypes.PRODUCTS_LOADED,
        payload: products 
    }
}

export const touchStarted = (touchVector: {x: number, y: number}) => {
    return{
        type: actionTypes.TOUCH_STARTED,
        payload: {
            x: touchVector.x,
            y: touchVector.y
        }
    }
}

export const touchMoved = (touchVector: {x: number, y: number}) => {
    return{
        type: actionTypes.TOUCH_MOVED,
        payload: {
            x: touchVector.x,
            y: touchVector.y
        }
    }
}

export const navSliderOpened = (isOpen: boolean) => {
    return{
        type: actionTypes.NAV_SLIDER_OPENED,
        payload: isOpen
    }
} 

export const loggedIn = (id: number, isLoggedIn: boolean) => {
    return{
        type: actionTypes.LOGGED_IN,
        payload: {
            isLoggedIn: isLoggedIn,
            id: id
        }
    }
}

export const cartLoaded = (cartArray: Cart[]) => {
    return{
        type: actionTypes.CART_LOADED,
        payload: cartArray
    }
}

export const searchedProductsLoaded = (products: Product[]) => {
    return{
        type: actionTypes.SEARCHED_PRODUCTS_LOADED,
        payload: products
    }
}