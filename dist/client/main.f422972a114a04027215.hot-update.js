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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AddNewContent extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { className: 'right-content-dashboard' },
      _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement('input', { type: 'text', placeholder: 'Enter Your Title...' }),
        _react2.default.createElement('textarea', { col: '100%', rows: '20', placeholder: 'Enter Your Description' }),
        'Upload Your File',
        _react2.default.createElement('input', { type: 'file' })
      )
    );
  }
}

exports.default = AddNewContent;

/***/ })

})
//# sourceMappingURL=main.f422972a114a04027215.hot-update.js.map