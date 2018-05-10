webpackHotUpdate("main",{

/***/ "./src/client/Components/Grids/Grid.js":
/*!*********************************************!*\
  !*** ./src/client/Components/Grids/Grid.js ***!
  \*********************************************/
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

const Grid = (_ref) => {
  let { content } = _ref,
      props = _objectWithoutProperties(_ref, ['content']);

  return _react2.default.createElement(
    'div',
    { className: 'grid' },
    _react2.default.createElement(
      'h3',
      null,
      content.title ? content.title : 'Untitled'
    ),
    props.isUser && _react2.default.createElement(
      'button',
      { className: 'btn btn-danger' },
      _react2.default.createElement('i', { className: 'fa fa-delete' })
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: `/single/${content._id}` },
      content.parmalink ?
      // console.log(`/${content.parmalink}`)
      _react2.default.createElement('img', { src: content.parmalink, title: content.title }) : _react2.default.createElement('img', { src: '/images/g1 copy.png', title: 'video-name' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'time' },
      _react2.default.createElement(
        'span',
        null,
        '00:10'
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
              _reactRouterDom.Link,
              { to: '#' },
              _react2.default.createElement('img', { src: '/images/likes.png', title: 'links' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '#' },
              _react2.default.createElement('img', { src: '/images/link.png', title: 'Link' })
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '#' },
              _react2.default.createElement('img', { src: '/images/views.png', title: 'Views' })
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'video-watch' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: 'single.html' },
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
            _reactRouterDom.Link,
            { to: 'categories.html' },
            'Lorem'
          )
        )
      )
    )
  );
};

exports.default = Grid;

/***/ })

})
//# sourceMappingURL=main.ab47664843597a50a5ed.hot-update.js.map