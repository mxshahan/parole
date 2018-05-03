webpackHotUpdate("main",{

/***/ "./src/client/Routes/PrivateRoute.js":
/*!*******************************************!*\
  !*** ./src/client/Routes/PrivateRoute.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const PrivateRoute = (_ref) => {
  let { isAuthenticated, component: Component } = _ref,
      rest = _objectWithoutProperties(_ref, ['isAuthenticated', 'component']);

  return console.log(isAuthenticated)
  // <Route {...rest} component={(props)=> (
  //     isAuthenticated ? (
  //         <div>
  //             <Component {...props}/>
  //         </div>
  //     ) : (
  //         <Redirect to="/login"/>
  //     )
  // )}/>
  ;
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);

/***/ })

})
//# sourceMappingURL=main.04fba47519dadf9d00b8.hot-update.js.map