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
        _reactRouterDom.NavLink,
        { exact: true, activeClassName: 'active', to: '/dashboard' },
        'Dashboard'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', to: '/dashboard/post' },
        'Add New Content'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', to: '/dashboard/account' },
        'Account Setting'
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', to: '/dashboard/mycontent' },
        'My Content'
      )
    )
  )
);

exports.default = DashboardSidebar;

/***/ })

})
//# sourceMappingURL=main.1578b1cc8f1919a230a7.hot-update.js.map