webpackHotUpdate("main",{

/***/ "./src/client/Components/Categories/CategoryList.js":
/*!**********************************************************!*\
  !*** ./src/client/Components/Categories/CategoryList.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CategoryList = ({ category }) => _react2.default.createElement(
  "div",
  { className: "categories-list" },
  _react2.default.createElement(
    "div",
    { className: "content-sidebar" },
    _react2.default.createElement(
      "h4",
      null,
      _react2.default.createElement("img", { src: "/images/fi.png", alt: "" }),
      "Categories"
    ),
    _react2.default.createElement(
      "ul",
      null,
      category.map(cat => {
        return;
        _react2.default.createElement(
          "li",
          { key: cat._id },
          _react2.default.createElement(
            "a",
            {
              href: "javascript:void()",
              onClick: undefined.props.category(cat.category)
            },
            cat.category
          )
        );
      })
    )
  )
);

exports.default = CategoryList;

/***/ })

})
//# sourceMappingURL=main.4b2ae836cb19fa01cd5d.hot-update.js.map