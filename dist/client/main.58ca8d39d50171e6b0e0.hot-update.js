webpackHotUpdate("main",{

/***/ "./src/client/Components/Categories/CategorySingle.js":
/*!************************************************************!*\
  !*** ./src/client/Components/Categories/CategorySingle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CategorySingle extends _react2.default.Component {
  render() {
    console.log(this.props.cat_id);
    return _react2.default.createElement(
      "div",
      { className: "recent-videos" },
      _react2.default.createElement(
        "h5",
        null,
        _react2.default.createElement("img", { src: "/images/recent.png", alt: "" }),
        "Recent-videos"
      ),
      _react2.default.createElement("div", { className: "grids grids2" })
    );
  }
}

exports.default = CategorySingle;

/***/ })

})
//# sourceMappingURL=main.58ca8d39d50171e6b0e0.hot-update.js.map