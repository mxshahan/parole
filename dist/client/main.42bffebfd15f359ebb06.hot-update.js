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

var _connect = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"connect\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
      this.props.myContent(res.data);
      this.setState({
        content: true
      });
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'div',
        { className: 'left-content' },
        this.state.content ? _react2.default.createElement(
          'div',
          { className: 'box' },
          _react2.default.createElement(
            'div',
            { className: 'grids' },
            this.props.contents.map((content, key) => {
              return _react2.default.createElement(Grid, { content: content, key: content._id });
            })
          )
        ) : 'Loading...'
      )
    );
  }
}
const mapStateToProps = state => ({
  contents: state.content.mycontent
});

const mapDispatchToProps = dispatch => ({
  myContent: data => dispatch(myContent(data))
});

exports.default = (0, _connect.connect)(mapStateToProps, mapDispatchToProps)(MyContent);

/***/ })

})
//# sourceMappingURL=main.42bffebfd15f359ebb06.hot-update.js.map