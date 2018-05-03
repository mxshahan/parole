webpackHotUpdate("main",{

/***/ "./src/client/Views/Dashboard.js":
/*!***************************************!*\
  !*** ./src/client/Views/Dashboard.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Dashboard = () =>
// <div className="categories-list">
//   <div className="content-sidebar">
//     <h4><img src="/images/fi.png" alt="" />Categories</h4>
_react2.default.createElement(
  'ul',
  null,
  category.map(cat => {
    return _react2.default.createElement(
      'li',
      { key: cat._id },
      _react2.default.createElement(
        Link,
        {
          to: `/category?id=${cat._id}`,
          style: { cursor: 'pointer' },
          onClick: e => props.filter(cat._id)
        },
        cat.name
      )
    );
  })
)
//   </div>
// </div>
;

exports.default = Dashboard;

/***/ })

})
//# sourceMappingURL=main.aba27d6e1eeff00aac5e.hot-update.js.map