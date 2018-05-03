webpackHotUpdate("main",{

/***/ "./src/client/Components/Container.js":
/*!********************************************!*\
  !*** ./src/client/Components/Container.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = props => _react2.default.createElement(
    "div",
    { className: "container" },
    props.children
);

exports.default = Container;

/***/ }),

/***/ "./src/client/Components/Row.js":
/*!**************************************!*\
  !*** ./src/client/Components/Row.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Row = props => _react2.default.createElement(
    "div",
    { className: "row " + props.className },
    props.children
);

exports.default = Row;

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

var _Container = __webpack_require__(/*! ../Components/Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ../Components/Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Login = () => _react2.default.createElement(
  'section',
  { className: 'Login text-center' },
  _react2.default.createElement(
    _Container2.default,
    null,
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        'div',
        { id: 'regLoginForm', className: 'col-sm-5' },
        _react2.default.createElement(
          'form',
          { className: 'form-group', onSubmit: undefined.loginHandler },
          _react2.default.createElement(
            'div',
            { className: 'closeBtnLogin', onClick: () => props.history.goBack() },
            _react2.default.createElement('i', { className: 'fa fa-times-circle fa-2x' })
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Login'
          ),
          _react2.default.createElement('input', { required: 'required', type: 'email', placeholder: 'Email', className: '', onChange: e => undefined.setState({
              email: e.target.value
            }) }),
          _react2.default.createElement('input', { required: true, type: 'password', placeholder: 'Password', className: '', onChange: e => undefined.setState({
              password: e.target.value
            }) }),
          _react2.default.createElement(
            'div',
            { className: 'd-flex' },
            _react2.default.createElement(
              'div',
              { className: 'mr-auto p-2' },
              _react2.default.createElement('input', { type: 'checkbox', id: 'remember' }),
              _react2.default.createElement(
                'label',
                { 'for': 'remember' },
                'Remember'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'p-2' },
              _react2.default.createElement(
                Link,
                { to: '#' },
                'Forget'
              )
            )
          ),
          _react2.default.createElement('input', { type: 'submit', className: 'btn btn-info', defaultValue: 'Login' }),
          _react2.default.createElement(
            'div',
            { className: 'd-flex createAccountBtn' },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement(
                Link,
                { to: '/register' },
                'Create an Account'
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
//# sourceMappingURL=main.4bc220587220f1b943cd.hot-update.js.map