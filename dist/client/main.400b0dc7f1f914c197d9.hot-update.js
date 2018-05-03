webpackHotUpdate("main",{

/***/ "./src/client/Routes/index.js":
/*!************************************!*\
  !*** ./src/client/Routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Homepage = __webpack_require__(/*! ../Views/Homepage */ "./src/client/Views/Homepage.js");

var _Homepage2 = _interopRequireDefault(_Homepage);

var _Header = __webpack_require__(/*! ../Components/Header */ "./src/client/Components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ../Components/Footer */ "./src/client/Components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _NotFound = __webpack_require__(/*! ../Views/NotFound */ "./src/client/Views/NotFound.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Category = __webpack_require__(/*! ../Views/Category */ "./src/client/Views/Category.js");

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const history = exports.history = (0, _createBrowserHistory2.default)();
// import indexRouter from './router'


const AppRouter = () => _react2.default.createElement(
  _reactRouterDom.Router,
  { history: history },
  _react2.default.createElement(
    'div',
    { className: 'wrap' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Homepage2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/category', component: _Category2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
    ),
    _react2.default.createElement(_Footer2.default, null)
  )
);

exports.default = AppRouter;

/***/ }),

/***/ "./src/client/Views/Category.js":
/*!**************************************!*\
  !*** ./src/client/Views/Category.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Category = () => _react2.default.createElement(
  "div",
  { "class": "content" },
  _react2.default.createElement(
    "div",
    { "class": "categories" },
    _react2.default.createElement(
      "div",
      { "class": "categories-list" },
      _react2.default.createElement(
        "div",
        { "class": "content-sidebar" },
        _react2.default.createElement(
          "h4",
          null,
          _react2.default.createElement("img", { src: "images/fi.png", alt: "" }),
          "Categories"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Arts & Media"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Business & Finance"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Careers & Education"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Cars & Transportation"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Crafts & Hobbies"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Environment"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "First Aid & Safety"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Food & Drink"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Games"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Health & Nutrition"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Holidays & Celebrations"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "House & Garden"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Kids"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Language & Reference"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Mind & Body"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Parenting & Family"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Performing Arts"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Sports & Fitness"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Technology"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Travel"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { "class": "categories-types" },
      _react2.default.createElement(
        "div",
        { "class": "recent-videos" },
        _react2.default.createElement(
          "h5",
          null,
          _react2.default.createElement("img", { src: "images/recent.png", alt: "" }),
          "Recent-videos"
        ),
        _react2.default.createElement(
          "div",
          { "class": "grids grids2" },
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g1 copy.png", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "00:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g2 copy.png", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "2:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g4.jpg", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "10:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "clear" },
            " "
          )
        ),
        _react2.default.createElement(
          "div",
          { "class": "grids grids2" },
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g1 copy.png", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "00:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g2 copy.png", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "2:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g4.jpg", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "10:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "clear" },
            " "
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { "class": "recent-videos" },
        _react2.default.createElement(
          "h5",
          null,
          _react2.default.createElement("img", { src: "images/recent.png", alt: "" }),
          "Most-View-videos"
        ),
        _react2.default.createElement(
          "div",
          { "class": "grids" },
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g1 copy.png", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "00:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g2 copy.png", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "2:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g4.jpg", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "10:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "clear" },
            " "
          )
        ),
        _react2.default.createElement(
          "div",
          { "class": "clear" },
          " "
        ),
        _react2.default.createElement(
          "div",
          { "class": "grids" },
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g1 copy.png", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "00:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g2 copy.png", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "2:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "grid grid2" },
            _react2.default.createElement(
              "h3",
              null,
              "Consectetur adipisicing elit"
            ),
            _react2.default.createElement(
              "a",
              { href: "single.html" },
              _react2.default.createElement("img", { src: "images/g4.jpg", title: "video-name" })
            ),
            _react2.default.createElement(
              "div",
              { "class": "time" },
              _react2.default.createElement(
                "span",
                null,
                "10:10"
              )
            ),
            _react2.default.createElement(
              "div",
              { "class": "grid-info" },
              _react2.default.createElement(
                "div",
                { "class": "video-share" },
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/likes.png", title: "links" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/link.png", title: "Link" })
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      _react2.default.createElement("img", { src: "images/views.png", title: "Views" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "video-watch" },
                _react2.default.createElement(
                  "a",
                  { href: "single.html" },
                  "Watch Now"
                )
              ),
              _react2.default.createElement(
                "div",
                { "class": "clear" },
                " "
              ),
              _react2.default.createElement(
                "div",
                { "class": "lables" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Labels:",
                  _react2.default.createElement(
                    "a",
                    { href: "#" },
                    "Lorem"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { "class": "clear" },
            " "
          )
        )
      )
    )
  ),
  _react2.default.createElement(
    "div",
    { "class": "clear" },
    " "
  )
);

exports.default = Category;

/***/ })

})
//# sourceMappingURL=main.400b0dc7f1f914c197d9.hot-update.js.map