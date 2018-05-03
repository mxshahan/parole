webpackHotUpdate("main",{

/***/ "./src/client/Routes/index.js":
/*!************************************!*\
  !*** ./src/client/Routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Homepage = __webpack_require__(/*! ../Views/Homepage */ "./src/client/Views/Homepage.js");

var _Homepage2 = _interopRequireDefault(_Homepage);

var _Header = __webpack_require__(/*! ../Components/Header */ "./src/client/Components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ../Components/Footer */ "./src/client/Components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _NotFound = __webpack_require__(/*! ../Views/NotFound */ "./src/client/Views/NotFound.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import indexRouter from './router'
const history = exports.history = (0, _createBrowserHistory2.default)();

const AppRouter = () => _react2.default.createElement(
  _reactRouterDom.Router,
  { history: history },
  _react2.default.createElement(
    'div',
    { className: 'wrap' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Homepage2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
    ),
    _react2.default.createElement(_Footer2.default, null)
  )
);

exports.default = AppRouter;

/***/ })

})
//# sourceMappingURL=main.4d28ceb28ad9466c7b15.hot-update.js.map