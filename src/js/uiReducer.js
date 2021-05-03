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
exports.uiReducer = void 0;
var actionTypes = require("./actionTypes");
var initialState = {
    touchStartX: 0,
    touchStartY: 0,
    touchMoveX: 0,
    touchMoveY: 0,
    navSliderOpen: false
};
var uiReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.TOUCH_STARTED:
            return __assign(__assign({}, state), { touchStartX: action.payload.x, touchStartY: action.payload.y });
        case actionTypes.TOUCH_MOVED:
            return __assign(__assign({}, state), { touchMoveX: action.payload.x, touchMoveY: action.payload.y });
        case actionTypes.NAV_SLIDER_OPENED:
            return __assign(__assign({}, state), { navSliderOpen: action.payload });
        default:
            return state;
    }
};
exports.uiReducer = uiReducer;
