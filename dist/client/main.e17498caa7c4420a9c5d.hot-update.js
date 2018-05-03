webpackHotUpdate("main",{

/***/ "./src/client/Components/Sidebar.js":
/*!******************************************!*\
  !*** ./src/client/Components/Sidebar.js ***!
  \******************************************/
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

const Sidebar = () => _react2.default.createElement(
  'div',
  { className: 'right-content' },
  _react2.default.createElement(
    'div',
    { className: 'popular' },
    _react2.default.createElement(
      'h3',
      null,
      'Popular Videos'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: '/images/l1.png', title: 'likes' }),
      ' 10,000'
    ),
    _react2.default.createElement(
      'div',
      { className: 'clear' },
      ' '
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'grid1' },
    _react2.default.createElement(
      'h3',
      null,
      'Consectetur adipisicing elit'
    ),
    _react2.default.createElement(
      'a',
      { href: '#' },
      _react2.default.createElement('img', { src: '/images/g7.jpg', title: 'video-name' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'time1' },
      _react2.default.createElement(
        'span',
        null,
        '2:50'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'grid-info' },
      _react2.default.createElement(
        'div',
        { className: 'video-share' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('img', { src: '/images/likes.png', title: 'links' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('img', { src: '/images/link.png', title: 'Link' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              _react2.default.createElement('img', { src: '/images/views.png', title: 'Views' })
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'video-watch' },
        _react2.default.createElement(
          'a',
          { href: '#' },
          'Watch Now'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'clear' },
        ' '
      ),
      _react2.default.createElement(
        'div',
        { className: 'lables' },
        _react2.default.createElement(
          'p',
          null,
          'Labels:',
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Lorem'
          )
        )
      )
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'clear' },
    ' '
  ),
  _react2.default.createElement(
    'div',
    { className: 'Recent-Vodeos' },
    _react2.default.createElement(
      'h3',
      null,
      'Recent-Videos'
    ),
    _react2.default.createElement(
      'div',
      { className: 'video1' },
      _react2.default.createElement('img', { src: '/images/r1.jpg', title: 'video2' }),
      _react2.default.createElement(
        'span',
        null,
        'Lorem ipsum dolor sit amet,'
      ),
      _react2.default.createElement(
        'p',
        null,
        's consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      ),
      _react2.default.createElement(
        'div',
        { className: 'clear' },
        ' '
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'video1 video2' },
      _react2.default.createElement('img', { src: '/images/r2.jpg', title: 'video2' }),
      _react2.default.createElement(
        'span',
        null,
        'Lorem ipsum dolor sit amet,'
      ),
      _react2.default.createElement(
        'p',
        null,
        's consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      ),
      _react2.default.createElement(
        'div',
        { className: 'clear' },
        ' '
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'r-all' },
      _react2.default.createElement(
        'a',
        { href: '#' },
        'View All'
      )
    )
  )
);

exports.default = Sidebar;

/***/ }),

/***/ "./src/client/Views/Homepage.js":
/*!**************************************!*\
  !*** ./src/client/Views/Homepage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Grid = __webpack_require__(/*! ../Components/Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Sidebar = __webpack_require__(/*! ../Components/Sidebar */ "./src/client/Components/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Homepage = () => _react2.default.createElement(
  'div',
  { className: 'content' },
  _react2.default.createElement(
    'div',
    { className: 'left-content' },
    _react2.default.createElement(
      'div',
      { className: 'searchbar' },
      _react2.default.createElement(
        'div',
        { className: 'search-left' },
        _react2.default.createElement(
          'p',
          null,
          'Latest Video Form VideosTube'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'search-right' },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement('input', { type: 'text' }),
          _react2.default.createElement('input', { type: 'submit', value: '' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'clear' },
        ' '
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'box' },
      _react2.default.createElement(
        'div',
        { className: 'grids' },
        _react2.default.createElement(_Grid2.default, null),
        _react2.default.createElement(_Grid2.default, null),
        _react2.default.createElement(_Grid2.default, null),
        _react2.default.createElement(_Grid2.default, null),
        _react2.default.createElement(_Grid2.default, null)
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'clear' },
      ' '
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dc_pagination dc_paginationA dc_paginationA03' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'first' },
          'First'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'previous' },
          'Previous'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#' },
          '1'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#' },
          '2'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'current' },
          '3'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#' },
          '4'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#' },
          '5'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'next' },
          'Next'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'last' },
          'Last'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'clear' },
      ' '
    ),
    _react2.default.createElement(_Sidebar2.default, null)
  )
);
exports.default = Homepage;

/***/ })

})
//# sourceMappingURL=main.e17498caa7c4420a9c5d.hot-update.js.map