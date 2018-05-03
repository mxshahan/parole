webpackHotUpdate("main",{

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NotFound = () => {
  return _react2.default.createElement(
    'section',
    { className: 'normal text-center bg-white' },
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
  );
};

exports.default = NotFound;

/***/ })

})
//# sourceMappingURL=main.2413946ae63570791df8.hot-update.js.map