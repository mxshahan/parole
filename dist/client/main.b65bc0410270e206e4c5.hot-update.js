webpackHotUpdate("main",{

/***/ "./src/client/Components/Dashboard/AddNewContent.js":
/*!**********************************************************!*\
  !*** ./src/client/Components/Dashboard/AddNewContent.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ../../Styles/dashboard.scss */ "./src/client/Styles/dashboard.scss");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AddNewContent extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      category: false
    }, _temp;
  }

  componentDidMount() {
    _axios2.default.get(`/api/category`).then(res => {
      console.log(res.data);
      this.setState({
        category: res.data
      });
    }).catch(e => {
      console.log(e);
    });
  }
  render() {
    return _react2.default.createElement(
      'div',
      { className: 'right-content-dashboard' },
      _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement('input', { type: 'text', placeholder: 'Enter Your Title...' }),
        _react2.default.createElement('textarea', { col: '100%', rows: '5', placeholder: 'Enter Your Description' }),
        _react2.default.createElement(
          'select',
          null,
          this.state.category ? _react2.default.createElement('option', null) : _react2.default.createElement(
            'option',
            { value: '-1' },
            'Loading...'
          )
        ),
        'Upload Your File',
        _react2.default.createElement('input', { type: 'file' })
      )
    );
  }
}

exports.default = AddNewContent;

/***/ })

})
//# sourceMappingURL=main.b65bc0410270e206e4c5.hot-update.js.map