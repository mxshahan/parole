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
      _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _Contact2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/single/:id', component: _Single2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
    ),
    _react2.default.createElement(_Footer2.default, null)
  )
);

exports.default = AppRouter;

/***/ }),

/***/ "./src/client/Views/Login.js":
/*!***********************************!*\
  !*** ./src/client/Views/Login.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Login = () => _react2.default.createElement(
  "section",
  { className: "Login text-center" },
  _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      Row,
      null,
      _react2.default.createElement(
        "div",
        { id: "regLoginForm", className: "col-sm-5" },
        _react2.default.createElement(
          "form",
          { className: "form-group", onSubmit: undefined.loginHandler },
          _react2.default.createElement(
            "div",
            { className: "closeBtnLogin", onClick: () => props.history.goBack() },
            _react2.default.createElement("i", { className: "fa fa-times-circle fa-2x" })
          ),
          _react2.default.createElement(
            "h2",
            null,
            "Login"
          ),
          _react2.default.createElement("input", { required: "required", type: "email", placeholder: "Email", className: "", onChange: e => undefined.setState({
              email: e.target.value
            }) }),
          _react2.default.createElement("input", { required: true, type: "password", placeholder: "Password", className: "", onChange: e => undefined.setState({
              password: e.target.value
            }) }),
          _react2.default.createElement(
            "div",
            { className: "d-flex" },
            _react2.default.createElement(
              "div",
              { className: "mr-auto p-2" },
              _react2.default.createElement("input", { type: "checkbox", id: "remember" }),
              _react2.default.createElement(
                "label",
                { "for": "remember" },
                "Remember"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "p-2" },
              _react2.default.createElement(
                Link,
                { to: "#" },
                "Forget"
              )
            )
          ),
          _react2.default.createElement("input", { type: "submit", className: "btn btn-info", defaultValue: "Login" }),
          _react2.default.createElement(
            "div",
            { className: "d-flex createAccountBtn" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement(
                Link,
                { to: "/register" },
                "Create an Account"
              )
            )
          )
        )
      )
    )
  )
);

exports.default = Login;

/***/ })

})
//# sourceMappingURL=main.cb99e6fa4c739883f7ad.hot-update.js.map