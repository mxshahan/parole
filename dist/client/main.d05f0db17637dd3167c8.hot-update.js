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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const CategoryList = (_ref) => {
  let { category } = _ref,
      props = _objectWithoutProperties(_ref, ['category']);

  return _react2.default.createElement(
    'div',
    { className: 'categories-list' },
    _react2.default.createElement(
      'div',
      { className: 'content-sidebar' },
      _react2.default.createElement(
        'h4',
        null,
        _react2.default.createElement('img', { src: '/images/fi.png', alt: '' }),
        'Categories'
      ),
      _react2.default.createElement(
        'ul',
        null,
        console.log('cat', category)
      )
    )
  );
};

exports.default = CategoryList;

/***/ })

})
//# sourceMappingURL=main.d05f0db17637dd3167c8.hot-update.js.map