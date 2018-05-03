webpackHotUpdate("main",{

/***/ "./src/client/Components/Dashboard/DashboardSidebar.js":
/*!*************************************************************!*\
  !*** ./src/client/Components/Dashboard/DashboardSidebar.js ***!
  \*************************************************************/
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

const DashboardSidebar = () => _react2.default.createElement(
  'div',
  { className: 'categories-list' },
  _react2.default.createElement(
    'div',
    { className: 'content-sidebar' },
    _react2.default.createElement(
      'h4',
      null,
      _react2.default.createElement('img', { src: '/images/fi.png', alt: '' }),
      'Member Area'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'Dashboard'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'Add New Content'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'Account Setting'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'My Content'
        )
      )
    )
  )
);

exports.default = DashboardSidebar;

/***/ })

})
//# sourceMappingURL=main.5463f89c26ec7d2385a8.hot-update.js.map