webpackHotUpdate("main",{

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

var _router = __webpack_require__(/*! ./Routes/router */ "./src/client/Routes/router.js");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jsx = _react2.default.createElement(
  _reactRedux.Provider,
  null,
  _react2.default.createElement(_router2.default, null)
);

_reactDom2.default.render(jsx, document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=main.7c84762bc91ca05d5494.hot-update.js.map