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
        { className: 'form-group' },
        _react2.default.createElement('input', { className: 'form-control', type: 'text', placeholder: 'Enter Your Title...' }),
        _react2.default.createElement('textarea', { className: 'form-control', col: '100%', rows: '5', placeholder: 'Enter Your Description' }),
        _react2.default.createElement(
          'select',
          { className: 'form-control' },
          _react2.default.createElement(
            'option',
            { value: '-1' },
            'Select a category'
          ),
          this.state.category ? this.state.category.map(category => {
            return _react2.default.createElement(
              'option',
              { key: category._id, value: category._id },
              category.name
            );
          }) : _react2.default.createElement(
            'option',
            { value: '-1' },
            'Loading...'
          )
        ),
        'Upload Your File',
        _react2.default.createElement('input', { type: 'file' }),
        _react2.default.createElement('input', { className: 'btn btn-blue', type: 'submit', defaultValue: 'Submit' })
      )
    );
  }
}

exports.default = AddNewContent;

/***/ })

})
//# sourceMappingURL=main.052aaa1c539c29caeed5.hot-update.js.map