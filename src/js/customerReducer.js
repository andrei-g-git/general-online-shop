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
exports.customerReducer = void 0;
var actionTypes = require("./actionTypes");
var initialState = {
    loggedIn: false,
    userId: -1
};
//ON LOGOUT USER ID MUST RETURN TO -1
var customerReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.LOGGED_IN:
            return __assign(__assign({}, state), { loggedIn: action.payload.loggedIn, userId: action.payload.id });
        default:
            return state;
    }
};
exports.customerReducer = customerReducer;
