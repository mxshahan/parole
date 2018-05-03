webpackHotUpdate("main",{

/***/ "./src/client/Components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/Components/Header.js ***!
  \*****************************************/
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

const Header = () =>
// start-Header
_react2.default.createElement(
  'div',
  { className: 'header' },
  _react2.default.createElement(
    'div',
    { className: 'logo' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: 'index.html' },
      _react2.default.createElement('img', { src: 'images/logo.png', title: 'logo' })
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'top-nav' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          'p',
          null,
          'My Frontpage'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/' },
          'About'
        ),
        _react2.default.createElement(
          'p',
          null,
          'About this blog'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/' },
          'Categories'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Be Ur Self'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/' },
          'Economics'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Human Needs'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/' },
          'Health'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Take A Trip'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: '/' },
          'Contact'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Leave Messages'
        )
      )
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'clear' },
    ' '
  )
)
// End-Header
;

exports.default = Header;

/***/ })

})
//# sourceMappingURL=main.ef399289c6d46b968277.hot-update.js.map