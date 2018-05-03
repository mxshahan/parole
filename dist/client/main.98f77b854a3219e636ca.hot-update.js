webpackHotUpdate("main",{

/***/ "./src/client/Components/Dashboard/MyContent.js":
/*!******************************************************!*\
  !*** ./src/client/Components/Dashboard/MyContent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MyContent extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      content: false
    }, _temp;
  }

  componentDidMount() {
    (0, _axios2.default)({
      method: 'get',
      url: `/api/content/my`,
      headers: {
        'authorization': localStorage.getItem('auth')
      }
    }).then(res => {
      console.log(res.data);
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement('div', { className: 'left-content' })
    );
  }
}
const mapStateToProps = state => ({
  content: state.content.mycontent
});

const mapDispatchToProps = dispatch => ({
  myContent: data => dispatch(myContent(data))
});

exports.default = connect(mapStateToProps, mapDispatchToProps)(MyContent);

/***/ })

})
//# sourceMappingURL=main.98f77b854a3219e636ca.hot-update.js.map