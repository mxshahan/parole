webpackHotUpdate("main",{

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

var _Grid = __webpack_require__(/*! ../Components/Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _CategoryList = __webpack_require__(/*! ../Components/Categories/CategoryList */ "./src/client/Components/Categories/CategoryList.js");

var _CategoryList2 = _interopRequireDefault(_CategoryList);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _content = __webpack_require__(/*! ../Actions/content */ "./src/client/Actions/content.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Category extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      content: false,
      category: false
    }, this.filterCategory = filter => {
      console.log(filter);
    }, _temp;
  }

  componentDidMount() {
    _axios2.default.get('/api/content/category').then(res => {
      this.props.setCategory(res.data);
      // console.log(res.data)
      this.setState({
        category: true
      });
    }).catch(e => {
      this.setState({
        category: false
      });
      console.log('error found in ./api/content/', e);
    });
  }

  render() {
    const props = this.props;
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'div',
        { className: 'categories' },
        this.state.category ? _react2.default.createElement(_CategoryList2.default, { category: this.props.category, filter: this.filterCategory }) : 'Loading',
        _react2.default.createElement(
          'div',
          { className: 'categories-types' },
          _react2.default.createElement(
            'div',
            { className: 'recent-videos' },
            _react2.default.createElement(
              'h5',
              null,
              _react2.default.createElement('img', { src: '/images/recent.png', alt: '' }),
              'Recent-videos'
            ),
            _react2.default.createElement('div', { className: 'grids grids2' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'recent-videos' },
            _react2.default.createElement(
              'h5',
              null,
              _react2.default.createElement('img', { src: '/images/recent.png', alt: '' }),
              'Most-View-videos'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'clear' },
        ' '
      )
    );
  }
}
const mapStateToProps = state => ({
  allContent: state.content.all,
  category: state.content.category
});

const mapDispatchToProps = dispatch => ({
  setCategory: data => dispatch((0, _content.setCategory)(data))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Category);

/***/ })

})
//# sourceMappingURL=main.a4276f4f12cf8af787ad.hot-update.js.map