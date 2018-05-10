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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _content = __webpack_require__(/*! ../../Actions/content */ "./src/client/Actions/content.js");

var _Grid = __webpack_require__(/*! ../Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MyContent extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      content: false
    }, this.deleteItem = id => {
      _axios2.default.delete(`/api/content/${id}`, {
        headers: {
          'authorization': localStorage.getItem('auth')
        }
      }).then(res => {
        this.props.deleteItem(res.data._id);
        console.log(res.data);
      }).catch(e => {
        console.log(e);
      });
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
      // console.log(res.data)
      this.props.myContent(res.data);
      this.setState({
        content: true
      });
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    console.log(this.props.contents, this.state.content);
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
              return _react2.default.createElement(_Grid2.default, { deleteItem: this.deleteItem, isUser: true, content: content, key: content._id });
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
  myContent: data => dispatch((0, _content.myContent)(data)),
  deleteItem: id => dispatch((0, _content.deleteContent)(id))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyContent);

/***/ })

})
//# sourceMappingURL=main.4de78b3079dbda455ad1.hot-update.js.map