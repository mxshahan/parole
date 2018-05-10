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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _auth = __webpack_require__(/*! ../Actions/auth */ "./src/client/Actions/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const Header = (_ref) => {
  let { isAuthenticated, LogoutUser } = _ref,
      props = _objectWithoutProperties(_ref, ['isAuthenticated', 'LogoutUser']);

  return (
    // start-Header
    _react2.default.createElement(
      'div',
      { className: 'header' },
      isAuthenticated ? _react2.default.createElement(
        'div',
        { className: 'auth' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/dashboard' },
          'Dashboard'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#', onClick: () => {
              localStorage.clear();
              LogoutUser();
            } },
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
              { activeClassName: 'active', to: '/' },
              'Home'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { activeClassName: 'active', to: '/category' },
              'Categories'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { activeClassName: 'active', to: '/about' },
              'About'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { activeClassName: 'active', to: '/contact' },
              'Contact'
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

  );
};
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
});

const mapDispatchToProps = dispatch => ({
  LogoutUser: () => dispatch((0, _auth.LogoutUser)())
});
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

/***/ })

})
//# sourceMappingURL=main.b5dd920113c746091526.hot-update.js.map