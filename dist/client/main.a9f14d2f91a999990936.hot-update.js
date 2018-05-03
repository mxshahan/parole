webpackHotUpdate("main",{

/***/ "./src/client/Actions/auth.js":
/*!************************************!*\
  !*** ./src/client/Actions/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const loginUser = exports.loginUser = user => ({
    type: 'LOGIN',
    user
});

const startLogin = exports.startLogin = body => {
    return dispatch => {
        dispatch(loginUser(body));
    };
};

const createUser = exports.createUser = user => ({
    type: 'CREATE_USER',
    user
});

const startCreateUser = exports.startCreateUser = body => {
    return dispatch => {
        dispatch(createUser(body));
    };
};

const LogoutUser = exports.LogoutUser = () => ({
    type: 'LOGOUT'
});

/***/ }),

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Routes = __webpack_require__(/*! ./Routes */ "./src/client/Routes/index.js");

var _Routes2 = _interopRequireDefault(_Routes);

var _Store = __webpack_require__(/*! ./Store/Store */ "./src/client/Store/Store.js");

var _Store2 = _interopRequireDefault(_Store);

var _auth = __webpack_require__(/*! ./Actions/auth */ "./src/client/Actions/auth.js");

__webpack_require__(/*! ./Styles/style.scss */ "./src/client/Styles/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = (0, _Store2.default)();

const jsx = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_Routes2.default, null)
);

_reactDom2.default.render(jsx, document.getElementById('app'));

if (localStorage.getItem('auth')) {
  store.dispatch((0, _auth.startLogin)({ token: localStorage.getItem('auth') }));
} else {
  store.dispatch((0, _auth.LogoutUser)());
}

/***/ })

})
//# sourceMappingURL=main.a9f14d2f91a999990936.hot-update.js.map