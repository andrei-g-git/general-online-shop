"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.databaseReducer = void 0;
var actionTypes = require("./actionTypes");
var initialState = {
    products: [],
    cart: [],
    searchedProducts: []
};
var databaseReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.PRODUCTS_LOADED:
            return __assign(__assign({}, state), { products: action.payload });
        case actionTypes.CART_LOADED:
            return __assign(__assign({}, state), { cart: action.payload });
        case actionTypes.SEARCHED_PRODUCTS_LOADED:
            return __assign(__assign({}, state), { searchedProducts: action.payload });
        default:
            return state;
    }
};
exports.databaseReducer = databaseReducer;
