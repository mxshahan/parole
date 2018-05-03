webpackHotUpdate("main",{

/***/ "./node_modules/firebase/index.js":
/*!****************************************!*\
  !*** ./node_modules/firebase/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var firebase = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./auth\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./database\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./messaging\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./storage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

module.exports = firebase;

/***/ }),

/***/ "./src/client/Firebase/firebase.js":
/*!*****************************************!*\
  !*** ./src/client/Firebase/firebase.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.firebase = undefined;

var _firebase = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Initialize Firebase
let config = {
    apiKey: "AIzaSyAAFoJ2nHcxQB-FwPrr8SmPEYibiyy5L-8",
    authDomain: "yumi-project.firebaseapp.com",
    databaseURL: "https://yumi-project.firebaseio.com",
    projectId: "yumi-project",
    storageBucket: "gs://yumi-project.appspot.com",
    messagingSenderId: "491868186977"
};
firebase.initializeApp(config);
const storage = firebase.storage();
exports.firebase = firebase;
exports.default = storage;

/***/ })

})
//# sourceMappingURL=main.da0f117b408321b0d346.hot-update.js.map