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

exports.default = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CONTENT':
            return state = {
                all: action.data,
                cat_content: state.cat_content,
                category: state.category,
                single: state.single,
                mycontent: state.mycontent
            };
        case 'SET_CATEGORY':
            return state = {
                all: state.all,
                cat_content: state.cat_content,
                single: state.single,
                mycontent: state.mycontent,
                category: action.data
            };

        case 'SET_CATEGORY_CONTENT':
            return state = {
                cat_content: action.data,
                all: state.all,
                category: state.category,
                single: state.single,
                mycontent: state.mycontent
                // case 'SET_PAGE_CONTENT':
                //     let page_content = [];
                //     for (let i=action.data-1;i<=action.data+11;i++) {
                //         page_content.push(state.all[i])
                //     }
                //     return state.page_content;

            };case 'MY_CONTENT':
            // state.mycontent = action.data;
            return state = {
                all: state.all,
                category: state.category,
                cat_content: state.cat_content,
                mycontent: action.data,
                single: state.single
            };
        case 'SINGLE_CONTENT':
            return state = {
                all: state.all,
                category: state.category,
                cat_content: state.cat_content,
                mycontent: state.mycontent,
                single: action.data
            };
        case 'DELETE_CONTENT':
            {
                const mycontent = state.mycontent.filter(content => content._id !== action.id);
                console.log('mc', mycontent);
            }
        case 'GET_SINGLE':
            return state.single = Object.values(state.all).map(value => value._id === action.id);
        default:
            return state;
    }
};

/***/ })

})
//# sourceMappingURL=main.092a97da6923b37ecc53.hot-update.js.map