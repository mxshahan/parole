webpackHotUpdate("main",{

/***/ "./src/client/Components/Dashboard/MyContent.js":
/*!******************************************************!*\
  !*** ./src/client/Components/Dashboard/MyContent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MyContent extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      content: false
    }, _temp;
  }

  componentDidMount() {
    Axios({
      method: 'get',
      url: `/api/content/my`,
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('auth')
      }
    }).then(res => {
      console.log(res.data);
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement('div', { className: 'left-content' })
    );
  }
}

exports.default = MyContent;

/***/ })

})
//# sourceMappingURL=main.00d4f80fe292b88ffb48.hot-update.js.map