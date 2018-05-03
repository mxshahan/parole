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

const Header = props =>
// start-Header
_react2.default.createElement(
  'div',
  { className: 'header' },
  props.isAuthenticated ? _react2.default.createElement(
    'div',
    { className: 'auth' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/dashboard' },
      'Dashboard'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/logout' },
      'Logout'
    )
  ) : _react2.default.createElement(
    'div',
    { className: 'auth' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/login' },
      'Login'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/register' },
      'Register'
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'logo' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/' },
      _react2.default.createElement('img', { src: '/images/logo.png', title: 'logo' })
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
          { to: '/category' },
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
          { to: '/about' },
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
          { to: '/contact' },
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
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
});

exports.default = connect(mapStateToProps)(Header);

/***/ })

})
//# sourceMappingURL=main.123320cf103f074c0962.hot-update.js.map