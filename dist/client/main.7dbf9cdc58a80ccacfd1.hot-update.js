webpackHotUpdate("main",{

/***/ "./src/client/Reducers/auth.js":
/*!*************************************!*\
  !*** ./src/client/Reducers/auth.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state = action.user;
        case 'LOGOUT':
            return {};
        case 'CREATE_USER':
            state = action.user;
        default:
            return state;
    }
};

/***/ }),

/***/ "./src/client/Reducers/blog.js":
/*!*************************************!*\
  !*** ./src/client/Reducers/blog.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = (state = {}, action) => {
    switch (action.type) {
        case 'SET_BLOG':
            return state = _extends({
                all: action.data
            }, state);
        case 'SINGLE_BLOG':
            return state = _extends({
                single: action.data
            }, state);
        case 'GET_SINGLE':
            return state.single = Object.values(state.all).map(value => value._id === action.id);
        default:
            return state;
    }
};

/***/ }),

/***/ "./src/client/Store/Store.js":
/*!***********************************!*\
  !*** ./src/client/Store/Store.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _auth = __webpack_require__(/*! ../Reducers/auth */ "./src/client/Reducers/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _blog = __webpack_require__(/*! ../Reducers/blog */ "./src/client/Reducers/blog.js");

var _blog2 = _interopRequireDefault(_blog);

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { sessionReducer, sessionService } from 'redux-react-session';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

exports.default = () => {
    //STORE_CREATION
    const store = (0, _redux.createStore)((0, _redux.combineReducers)({
        auth: _auth2.default,
        blog: _blog2.default
    }), composeEnhancer((0, _redux.applyMiddleware)(_reduxThunk2.default)));
    // sessionService.initSessionService(store)
    return store;
};

/***/ })

})
//# sourceMappingURL=main.7dbf9cdc58a80ccacfd1.hot-update.js.map