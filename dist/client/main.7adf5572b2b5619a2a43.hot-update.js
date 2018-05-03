webpackHotUpdate("main",{

/***/ "./src/client/Store/Store.js":
/*!***********************************!*\
  !*** ./src/client/Store/Store.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _auth = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../Reducers/auth\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose; // eslint-disable-line

// import { sessionReducer, sessionService } from 'redux-react-session';

exports.default = () => {
  // STORE_CREATION
  const store = (0, _redux.createStore)((0, _redux.combineReducers)({
    auth: _auth2.default
  }), composeEnhancer((0, _redux.applyMiddleware)(_reduxThunk2.default)));
  // sessionService.initSessionService(store)
  return store;
};

/***/ })

})
//# sourceMappingURL=main.7adf5572b2b5619a2a43.hot-update.js.map