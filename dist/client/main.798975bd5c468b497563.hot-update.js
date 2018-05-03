webpackHotUpdate("main",{

/***/ "./src/client/Reducers/content.js":
/*!****************************************!*\
  !*** ./src/client/Reducers/content.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CONTENT':
            return state = _extends({
                all: action.data
            }, state);
        case 'SET_CATEGORY':
            return state = _extends({
                category: action.data
            }, state);

        case 'SET_CATEGORY_CONTENT':
            state.cat_content = action.data;
        case 'SET_PAGE_CONTENT':
            let page_content = [];
            for (let i = action.data - 1; i <= action.data + 11; i++) {
                page_content.push(state.all[i]);
            }
        case 'SINGLE_CONTENT':
            return state = _extends({
                single: action.data
            }, state);
        case 'GET_SINGLE':
            return state.single = Object.values(state.all).map(value => value._id === action.id);
        default:
            return state;
    }
};

/***/ })

})
//# sourceMappingURL=main.798975bd5c468b497563.hot-update.js.map