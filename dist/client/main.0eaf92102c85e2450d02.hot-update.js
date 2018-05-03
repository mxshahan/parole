webpackHotUpdate("main",{

/***/ "./src/client/Components/Dashboard/DashboardSidebar.js":
/*!*************************************************************!*\
  !*** ./src/client/Components/Dashboard/DashboardSidebar.js ***!
  \*************************************************************/
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

const DashboardSidebar = () => _react2.default.createElement(
  'div',
  { className: 'content-sidebar' },
  _react2.default.createElement(
    'h4',
    null,
    _react2.default.createElement('img', { src: '/images/fi.png', alt: '' }),
    'Member Area'
  ),
  _react2.default.createElement(
    'ul',
    null,
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/dashboard' },
        'Dashboard'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/dashboard/post' },
        'Add New Content'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/dashboard/account' },
        'Account Setting'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/dashboard/mycontent' },
        'My Content'
      )
    )
  )
);

exports.default = DashboardSidebar;

/***/ }),

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _DashboardSidebar = __webpack_require__(/*! ../Components/Dashboard/DashboardSidebar */ "./src/client/Components/Dashboard/DashboardSidebar.js");

var _DashboardSidebar2 = _interopRequireDefault(_DashboardSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const PrivateRoute = (_ref) => {
      let { isAuthenticated, component: Component } = _ref,
          rest = _objectWithoutProperties(_ref, ['isAuthenticated', 'component']);

      return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { component: props => console.log(isAuthenticated)
            // isAuthenticated ? (
            //     <div>
            //         <div className="categories-list">
            //             <DashboardSidebar/>
            //             <Component {...props}/>
            //             <div className="clear"> </div>
            //         </div>
            //     </div>
            // ) : (
            //     <Redirect to="/login"/>
            // )
      }));
};

const mapStateToProps = state => ({
      isAuthenticated: !!state.auth.token
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);

/***/ })

})
//# sourceMappingURL=main.0eaf92102c85e2450d02.hot-update.js.map