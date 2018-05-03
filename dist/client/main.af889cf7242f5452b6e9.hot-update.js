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
    return _react2.default.createElement(
      "div",
      { className: "recent-videos" },
      _react2.default.createElement(
        "h5",
        null,
        _react2.default.createElement("img", { src: "/images/recent.png", alt: "" }),
        "Recent-videos"
      ),
      _react2.default.createElement(
        "div",
        { className: "grids grids2" },
        this.state.content && props.cat_content.map((content, key) => {
          return _react2.default.createElement(Grid, { content: content, key: content._id });
        }),
        this.state.content === undefined && 'Nothing Found'
      )
    );
  }
}

exports.default = CategorySingle;

/***/ })

})
//# sourceMappingURL=main.af889cf7242f5452b6e9.hot-update.js.map