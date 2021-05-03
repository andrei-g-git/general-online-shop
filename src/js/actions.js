"use strict";
exports.__esModule = true;
exports.searchedProductsLoaded = exports.cartLoaded = exports.loggedIn = exports.navSliderOpened = exports.touchMoved = exports.touchStarted = exports.productsLoaded = void 0;
var actionTypes = require("./actionTypes");
var productsLoaded = function (products) {
    return {
        type: actionTypes.PRODUCTS_LOADED,
        payload: products
    };
};
exports.productsLoaded = productsLoaded;
var touchStarted = function (touchVector) {
    return {
        type: actionTypes.TOUCH_STARTED,
        payload: {
            x: touchVector.x,
            y: touchVector.y
        }
    };
};
exports.touchStarted = touchStarted;
var touchMoved = function (touchVector) {
    return {
        type: actionTypes.TOUCH_MOVED,
        payload: {
            x: touchVector.x,
            y: touchVector.y
        }
    };
};
exports.touchMoved = touchMoved;
var navSliderOpened = function (isOpen) {
    return {
        type: actionTypes.NAV_SLIDER_OPENED,
        payload: isOpen
    };
};
exports.navSliderOpened = navSliderOpened;
var loggedIn = function (id, isLoggedIn) {
    return {
        type: actionTypes.LOGGED_IN,
        payload: {
            isLoggedIn: isLoggedIn,
            id: id
        }
    };
};
exports.loggedIn = loggedIn;
var cartLoaded = function (cartArray) {
    return {
        type: actionTypes.CART_LOADED,
        payload: cartArray
    };
};
exports.cartLoaded = cartLoaded;
var searchedProductsLoaded = function (products) {
    return {
        type: actionTypes.SEARCHED_PRODUCTS_LOADED,
        payload: products
    };
};
exports.searchedProductsLoaded = searchedProductsLoaded;
