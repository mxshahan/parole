webpackHotUpdate("main",{

/***/ "./src/client/Components/Dashboard/AddNewContent.js":
/*!**********************************************************!*\
  !*** ./src/client/Components/Dashboard/AddNewContent.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ../../Styles/dashboard.scss */ "./src/client/Styles/dashboard.scss");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _firebase = __webpack_require__(/*! ../../Firebase/firebase */ "./src/client/Firebase/firebase.js");

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AddNewContent extends _react2.default.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            categoryList: false,
            title: '',
            category: '',
            description: '',
            parmalink: '',
            thumbnail: '',
            uploadStatus: null
        }, this.handleFileUpload = e => {
            this.setState({
                uploadStatus: 'Please Wait...'
            });
            const file = e.target.files[0];
            const storageRef = _firebase2.default.ref('projects/' + file.name);
            const task = storageRef.put(file).then(res => {
                console.log(res);
                this.setState({
                    uploadStatus: 'Uploaded Successfully!',
                    //Getting the uploaded file URL
                    parmalink: res.metadata.downloadURLs[0]
                });
            }).catch(e => {
                console.log("Error", e);
            });
        }, this.handleSubmit = e => {
            e.preventDefault();
            const {
                title = '',
                category = '',
                description = '',
                parmalink = '',
                thumbnail = ''
            } = this.state;
            if (title) {
                console.log('yes1');
            } else {
                console.log('no');
            }
        }, _temp;
    }

    componentDidMount() {
        _axios2.default.get(`/api/category`).then(res => {
            console.log(res.data);
            this.setState({
                categoryList: res.data
            });
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return _react2.default.createElement(
            'div',
            { className: 'right-content-dashboard', id: 'regLoginForm' },
            _react2.default.createElement(
                'form',
                { role: 'form', onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group has-success has-feedback' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'inputSuccess3' },
                                'Title'
                            ),
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'inputSuccess3', required: 'required', onChange: e => {
                                    this.setState({
                                        title: e.target.value
                                    });
                                } })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group has-warning has-feedback' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'inputWarning3' },
                                'Category'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'select',
                                { className: 'form-control', required: 'required', onChange: e => {
                                        this.setState({
                                            catagory: e.target.value
                                        });
                                    } },
                                _react2.default.createElement(
                                    'option',
                                    { value: '-1' },
                                    'Select a category'
                                ),
                                this.state.categoryList ? this.state.categoryList.map(category => {
                                    return _react2.default.createElement(
                                        'option',
                                        { key: category._id, value: category._id },
                                        category.name
                                    );
                                }) : _react2.default.createElement(
                                    'option',
                                    { value: '-1' },
                                    'Loading...'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group has-warning has-feedback' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'inputError3' },
                                'Description'
                            ),
                            _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'inputError3', onChange: e => {
                                    this.setState({
                                        description: e.target.value
                                    });
                                } })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'inputError3' },
                                'Upload File'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('input', { type: 'file', id: 'exampleInputFile', onChange: this.handleFileUpload }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'p',
                                { className: 'help-block' },
                                this.state.uploadStatus ? this.state.uploadStatus : 'Upload your file'
                            ),
                            this.state.msg && _react2.default.createElement(
                                'h3',
                                { className: 'help-block' },
                                this.state.msg
                            )
                        )
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('input', { type: 'submit', className: 'btn btn-primary', defaultValue: 'Save & Publish' })
            )
        );
    }
}

exports.default = AddNewContent;

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

var _firebase = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"firebase\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
//# sourceMappingURL=main.4b92f6f23b4be9019c11.hot-update.js.map