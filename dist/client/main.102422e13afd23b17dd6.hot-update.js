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

var _config = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Store/config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = (0, _config2.default)();

const jsx = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_router2.default, null)
);

_reactDom2.default.render(jsx, document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=main.102422e13afd23b17dd6.hot-update.js.map