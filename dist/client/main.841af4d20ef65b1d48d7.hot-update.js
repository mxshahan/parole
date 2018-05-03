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

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Register extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      username: ''
    }, this.registerHandler = e => {
      e.preventDefault();
      _axios2.default.post('./api/user/create', this.state).then(res => {
        console.log(res.data);
        // localStorage.setItem('auth', res.data.token);
        // this.props.startLogin(res.data);
        // this.props.history.push('/');
      }).catch(e => {
        console.log('Error login', e);
      });
    }, _temp;
  }

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
              { className: 'form-group', onSubmit: this.registerHandler },
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
                    { htmlFor: 'remember' },
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
//# sourceMappingURL=main.841af4d20ef65b1d48d7.hot-update.js.map