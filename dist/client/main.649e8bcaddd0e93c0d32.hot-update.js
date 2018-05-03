webpackHotUpdate("main",{

/***/ "./src/client/Routes/PublicRoute.js":
/*!******************************************!*\
  !*** ./src/client/Routes/PublicRoute.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const PublicRoute = (_ref) => {
    let { isAuthenticated, component: Component } = _ref,
        rest = _objectWithoutProperties(_ref, ['isAuthenticated', 'component']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { component: props => isAuthenticated ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(Component, props)
        ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) }));
};

const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.token
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PublicRoute);

/***/ })

})
//# sourceMappingURL=main.649e8bcaddd0e93c0d32.hot-update.js.map