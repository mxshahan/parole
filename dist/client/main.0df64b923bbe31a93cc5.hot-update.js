webpackHotUpdate("main",{

/***/ "./src/client/Components/Content/Single.Content.js":
/*!*********************************************************!*\
  !*** ./src/client/Components/Content/Single.Content.js ***!
  \*********************************************************/
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

const SingleContent = ({ single }) => _react2.default.createElement(
  'section',
  null,
  _react2.default.createElement(
    'div',
    { className: 'title' },
    _react2.default.createElement(
      'h3',
      null,
      single ? single.title : 'Untitled'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'By:'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          single.author ? single.author.username : 'Admin'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          _react2.default.createElement('img', { src: '/images/sub.png', title: 'subscribe' }),
          'subscribe'
        )
      )
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'video-inner' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '#' },
      _react2.default.createElement('img', { src: '/images/b11.png', title: 'videoname' }),
      _react2.default.createElement(
        'span',
        null,
        '10:00'
      )
    )
  ),
  _react2.default.createElement(Social, null),
  _react2.default.createElement(
    'div',
    { className: 'clear' },
    ' '
  ),
  _react2.default.createElement(
    'div',
    { className: 'video-details' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Uploaded on ',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '#' },
            'June 21, 2013'
          ),
          ' by ',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '#' },
            'Lorem'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        )
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'other-links' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'youtube.com/videos-tube'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'facebook.com/videos-tube'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'Twitter.com/videos-tube'
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
    { className: 'tags' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Tags:'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'Games'
        ),
        ' ,'
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#' },
          'HD-Videos'
        )
      )
    )
  )
);

exports.default = SingleContent;

/***/ })

})
//# sourceMappingURL=main.0df64b923bbe31a93cc5.hot-update.js.map