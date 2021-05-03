"use strict";
exports.__esModule = true;
exports.formatWithHyphen = void 0;
var formatWithHyphen = function (productTitle) {
    //ew ew ewww regex get it off getitoofffff!!
    var firstPass = productTitle.replace(/ /g, "-");
    var secondPass = firstPass.replace(/\./g, "-");
    return secondPass.replace(/,/g, "-");
};
exports.formatWithHyphen = formatWithHyphen;
