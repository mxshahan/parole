webpackHotUpdate("main",{

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      data: 'hi'
    }, _temp;
  }

  componentDidMount() {
    const a = this.state;
    _axios2.default.get('./user').then(res => {
      console.log(res);
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      this.state.data
    );
  }
}

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=main.0f46ea25287cf4388b07.hot-update.js.map