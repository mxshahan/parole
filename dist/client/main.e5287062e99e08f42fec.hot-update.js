webpackHotUpdate("main",{

/***/ "./src/client/Styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/Styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:175)\nYou may need an appropriate loader to handle this file type.\n| /* reset */\n| html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,dl,dt,dd,ol,nav ul,nav li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}\n| article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}\n| ol,ul{list-style:none;margin:0px;padding:0px;}");

/***/ }),

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Routes = __webpack_require__(/*! ./Routes */ "./src/client/Routes/index.js");

var _Routes2 = _interopRequireDefault(_Routes);

var _Store = __webpack_require__(/*! ./Store/Store */ "./src/client/Store/Store.js");

var _Store2 = _interopRequireDefault(_Store);

__webpack_require__(/*! ./Styles/style.scss */ "./src/client/Styles/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = (0, _Store2.default)();

const jsx = _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_Routes2.default, null)
);

_reactDom2.default.render(jsx, document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=main.e5287062e99e08f42fec.hot-update.js.map