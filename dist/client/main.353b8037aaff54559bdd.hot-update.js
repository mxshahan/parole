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
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Homepage2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
    ),
    _react2.default.createElement(_Footer2.default, null)
  )
);

exports.default = AppRouter;

/***/ }),

/***/ "./src/client/Views/NotFound.js":
/*!**************************************!*\
  !*** ./src/client/Views/NotFound.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Container = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../Components/Partials/Container\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../Components/Partials/Row\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import styles from '../Styles/notfound.scss';


const NotFound = () => {
  return _react2.default.createElement(
    'section',
    { className: 'normal text-center bg-white' },
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement(
            'h1',
            { className: 'title' },
            'Ops! 404 Error - Page not found'
          ),
          _react2.default.createElement('img', { src: './assets/yay.jpg', alt: '', width: '400px' }),
          _react2.default.createElement(
            'div',
            { className: '' },
            _react2.default.createElement(
              'p',
              null,
              'You might type wrong ',
              _react2.default.createElement(
                'code',
                null,
                'URL'
              ),
              '. Check out the url.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                'Go Home'
              )
            )
          )
        )
      )
    )
  );
};

exports.default = NotFound;

/***/ })

})
//# sourceMappingURL=main.353b8037aaff54559bdd.hot-update.js.map