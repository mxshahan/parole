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

var _Category = __webpack_require__(/*! ../Views/Category */ "./src/client/Views/Category.js");

var _Category2 = _interopRequireDefault(_Category);

var _About = __webpack_require__(/*! ../Views/About */ "./src/client/Views/About.js");

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(/*! ../Views/Contact */ "./src/client/Views/Contact.js");

var _Contact2 = _interopRequireDefault(_Contact);

var _Single = __webpack_require__(/*! ../Views/Single */ "./src/client/Views/Single.js");

var _Single2 = _interopRequireDefault(_Single);

var _Login = __webpack_require__(/*! ../Views/Login */ "./src/client/Views/Login.js");

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(/*! ../Views/Register */ "./src/client/Views/Register.js");

var _Register2 = _interopRequireDefault(_Register);

var _Dashboard = __webpack_require__(/*! ../Views/Dashboard */ "./src/client/Views/Dashboard.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _PrivateRoute = __webpack_require__(/*! ./PrivateRoute */ "./src/client/Routes/PrivateRoute.js");

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _PublicRoute = __webpack_require__(/*! ./PublicRoute */ "./src/client/Routes/PublicRoute.js");

var _PublicRoute2 = _interopRequireDefault(_PublicRoute);

var _CategorySingle = __webpack_require__(/*! ../Components/Categories/CategorySingle */ "./src/client/Components/Categories/CategorySingle.js");

var _CategorySingle2 = _interopRequireDefault(_CategorySingle);

var _AddNewContent = __webpack_require__(/*! ../Components/Dashboard/AddNewContent */ "./src/client/Components/Dashboard/AddNewContent.js");

var _AddNewContent2 = _interopRequireDefault(_AddNewContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const history = exports.history = (0, _createBrowserHistory2.default)();
// import indexRouter from './router'


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
      _react2.default.createElement(_reactRouterDom.Route, { path: '/category', component: _Category2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/category/:id', component: _CategorySingle2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _Contact2.default }),
      _react2.default.createElement(_PublicRoute2.default, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_PublicRoute2.default, { path: '/register', component: _Register2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/single/:id', component: _Single2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/dashboard', exact: true, component: _Dashboard2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/dashboard/post', component: _AddNewContent2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/dashboard/mycontent', component: _AddNewContent2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
    ),
    _react2.default.createElement(_Footer2.default, null)
  )
);

exports.default = AppRouter;

/***/ })

})
//# sourceMappingURL=main.45a7668f9d35952c5b4b.hot-update.js.map