webpackHotUpdate("main",{

/***/ "./src/client/Views/Register.js":
/*!**************************************!*\
  !*** ./src/client/Views/Register.js ***!
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

var _Container = __webpack_require__(/*! ../Components/Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ../Components/Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

loginHandler = e => {
  e.preventDefault();
  Axios.post('./api/user/login', undefined.state).then(res => {
    console.log(res.data);
    localStorage.setItem('auth', res.data.token);
    undefined.props.startLogin(res.data);
    undefined.props.history.push('/');
  }).catch(e => {
    console.log('Error login', e);
  });
};

class Register extends _react2.default.Component {
  render() {
    const props = this.props;
    return _react2.default.createElement(
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
              { className: 'form-group' },
              _react2.default.createElement(
                'div',
                { className: 'closeBtnLogin', onClick: () => props.history.goBack() },
                _react2.default.createElement('i', { className: 'fa fa-times-circle fa-2x' })
              ),
              _react2.default.createElement(
                'h2',
                null,
                'Sign Up'
              ),
              _react2.default.createElement('input', { type: 'text', placeholder: 'First Name', className: '' }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Last Name', className: '' }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Username', className: '' }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Email', className: '' }),
              _react2.default.createElement('input', { type: 'password', placeholder: 'Password', className: '' }),
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
                    _reactRouterDom.Link,
                    { to: '#' },
                    'Forget'
                  )
                )
              ),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-info' },
                'Register'
              ),
              _react2.default.createElement(
                'div',
                { className: 'd-flex createAccountBtn' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Already have an account ',
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login' },
                    'Login'
                  )
                )
              )
            )
          )
        )
      )
    );
  }
}

exports.default = Register;

/***/ })

})
//# sourceMappingURL=main.6fe304767feabda257c5.hot-update.js.map