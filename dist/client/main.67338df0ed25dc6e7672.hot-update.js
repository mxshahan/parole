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
            uploadStatus: null,
            progress: false
        }, this.handleFileUpload = e => {
            this.setState({
                uploadStatus: 'Please Wait...'
            });
            const file = e.target.files[0];
            const storageRef = _firebase2.default.ref('projects/' + file.name);
            const task = storageRef.put(file).then(res => {
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
            this.setState({
                progress: 'Please Wait...'
            });
            const body = {
                title: this.state.title,
                category: this.state.category,
                description: this.state.description,
                parmalink: this.state.parmalink
            };
            (0, _axios2.default)({
                method: 'post',
                url: `/api/content`,
                data: body,
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('auth')
                }
            }).then(res => {
                console.log(res.data);
                this.props.history.push('/dashboard/mycontent');

                this.setState({
                    progress: 'Successfull Published...'
                });
            }).catch(e => {
                console.log(e);
                this.setState({
                    progress: 'Error While Publishing...'
                });
            });
        }, _temp;
    }

    componentDidMount() {
        _axios2.default.get(`/api/category`).then(res => {
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
                                            category: e.target.value
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

/***/ })

})
//# sourceMappingURL=main.67338df0ed25dc6e7672.hot-update.js.map