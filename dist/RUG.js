"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _PropTypes = require("./PropTypes");

var _Handle = _interopRequireDefault(require("./Handle"));

var _Context = _interopRequireDefault(require("./Context"));

var _Request = _interopRequireDefault(require("./Request"));

var _view = _interopRequireDefault(require("./view"));

var _Utils = require("./Utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RUG =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(RUG, _React$Component);

  function RUG(_ref) {
    var _this;

    var initialState = _ref.initialState,
        ssrSupport = _ref.ssrSupport;
    (0, _classCallCheck2["default"])(this, RUG);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RUG).call(this));
    _this.fileInput = _react["default"].createRef();
    _this.setSort = _this.setSort.bind((0, _assertThisInitialized2["default"])(_this));
    _this.uploadFiles = _this.uploadFiles.bind((0, _assertThisInitialized2["default"])(_this));
    _this.replaceImages = _this.replaceImages.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openDialogue = _this.openDialogue.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onProgress = _this.onProgress.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSuccess = _this.onSuccess.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onWarning = _this.onWarning.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onError = _this.onError.bind((0, _assertThisInitialized2["default"])(_this));
    _this.requests = [];
    _this.increment = 0;
    _this.state = {
      images: _this.convertImages(initialState),
      renderComponent: !ssrSupport
    };
    return _this;
  }

  (0, _createClass2["default"])(RUG, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          ssrSupport = _this$props.ssrSupport,
          onChange = _this$props.onChange; // start application send initialState images

      onChange(this.state.images, 'initial'); // ssrSupport

      if (ssrSupport) {
        this.setState({
          renderComponent: true
        });
      }
    }
  }, {
    key: "create",
    value: function create(item) {
      var _this2 = this;

      var uid = "rug-".concat(Date.now(), "-").concat(this.increment++);
      item = _objectSpread({
        uid: uid,
        done: false,
        error: false,
        uploading: false,
        progress: 0,
        refresh: function refresh() {},
        abort: function abort() {},
        remove: function remove() {
          return _this2.remove(uid);
        },
        click: function click() {
          return _this2.onClick(uid);
        },
        select: function select() {
          return _this2.onSelected(uid);
        },
        upload: function upload(data) {
          return _this2.tryUpload(uid, data);
        }
      }, item);
      return item;
    }
  }, {
    key: "convertImages",
    value: function convertImages(images) {
      var _this3 = this;

      return images.map(function (item) {
        return _this3.create(_objectSpread({
          done: true
        }, item));
      });
    }
  }, {
    key: "replaceImages",
    value: function replaceImages(images) {
      var _this4 = this;

      this.setState({
        images: this.convertImages(images)
      }, function () {
        _this4.props.onChange(_this4.state.images, 'initial');
      });
    }
  }, {
    key: "refresh",
    value: function refresh(uid, data) {
      var _this5 = this;

      this.setImage(uid, {
        error: false,
        done: false,
        progress: 0
      }, function (image) {
        _this5.upload(image);
      });
    }
  }, {
    key: "tryUpload",
    value: function () {
      var _tryUpload = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(uid, file) {
        var _this6 = this;

        var changes, source;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                changes = {};
                _context.prev = 1;

                if (!(file instanceof Blob)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return this.getImageURLToBlob(file);

              case 5:
                source = _context.sent;
                changes = {
                  file: file,
                  source: source
                };

              case 7:
                this.setImage(uid, _objectSpread({}, changes, {
                  error: false,
                  done: false,
                  progress: 0
                }), function (image) {
                  return _this6.upload(image);
                });
                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function tryUpload(_x, _x2) {
        return _tryUpload.apply(this, arguments);
      }

      return tryUpload;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(uid) {
        var _this7 = this;

        var images, deletedImage, key, image;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                images = this.state.images;
                _context2.t0 = _regenerator["default"].keys(images);

              case 2:
                if ((_context2.t1 = _context2.t0()).done) {
                  _context2.next = 14;
                  break;
                }

                key = _context2.t1.value;
                image = images[key];

                if (!(image.uid === uid)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 8;
                return this.props.onConfirmDelete(image, images);

              case 8:
                if (!_context2.sent) {
                  _context2.next = 12;
                  break;
                }

                if (typeof image.abort === 'function') {
                  image.abort();
                }

                deletedImage = image;
                images.splice(key, 1);

              case 12:
                _context2.next = 2;
                break;

              case 14:
                this.setState({
                  images: images
                }, function () {
                  _this7.props.onChange(_this7.state.images, 'removed');

                  if (deletedImage) {
                    _this7.props.onDeleted(deletedImage, _this7.state.images);
                  }
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function remove(_x3) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "onProgress",
    value: function onProgress(uid, percentage) {
      this.setImage(uid, {
        progress: isNaN(percentage) ? 0 : percentage
      });
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(uid, response) {
      var _this8 = this;

      var source = this.props.source;
      source = typeof source === 'function' ? source(response) : response.source;
      this.setImage(uid, {
        source: source,
        done: true,
        error: false,
        uploading: false,
        progress: 100
      }, function () {
        return _this8.props.onSuccess(_this8.state.images.find(function (item) {
          return item.uid === uid;
        }), response);
      });
    }
  }, {
    key: "onError",
    value: function onError(uid, _ref2) {
      var _this9 = this;

      var status = _ref2.status,
          response = _ref2.response;
      this.setImage(uid, {
        status: status,
        error: true,
        uploading: false,
        refresh: function refresh(data) {
          return _this9.refresh(uid, data);
        }
      }, function (image) {
        _this9.props.onError({
          status: status,
          response: response,
          image: image
        });
      });
    }
  }, {
    key: "onClick",
    value: function onClick(uid) {
      this.props.onClick(this.state.images.find(function (image) {
        return image.uid === uid;
      }));
    }
  }, {
    key: "onWarning",
    value: function onWarning(key, rules) {
      this.props.onWarning(key, rules);
    }
  }, {
    key: "setImage",
    value: function setImage(uid, append, finish) {
      var _this10 = this;

      var image,
          images = this.state.images;
      images = images.map(function (item) {
        if (item.uid === uid) {
          return image = _objectSpread({}, item, {}, append);
        }

        return item;
      });
      this.setState({
        images: images
      }, function () {
        if (finish) finish(image);

        _this10.props.onChange(images);
      });
    }
  }, {
    key: "onSelected",
    value: function onSelected(uid) {
      var _this11 = this;

      this.setState({
        images: this.state.images.map(function (item) {
          return Object.assign({}, item, {
            selected: item.uid === uid
          });
        })
      }, function () {
        return _this11.props.onChange(_this11.state.images, 'selected');
      });
    }
  }, {
    key: "openDialogue",
    value: function openDialogue() {
      this.fileInput.current.click();
    }
  }, {
    key: "uploadFiles",
    value: function () {
      var _uploadFiles = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(files) {
        var _this12 = this;

        var images, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, source, image;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                images = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 4;
                _iterator = files[Symbol.iterator]();

              case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 21;
                  break;
                }

                file = _step.value;
                _context3.prev = 8;
                _context3.next = 11;
                return this.getImageURLToBlob(file, images);

              case 11:
                source = _context3.sent;
                image = this.create({
                  file: file,
                  source: source,
                  name: file.name,
                  size: (0, _Utils.bytesToSize)(file.size)
                });
                images.push(image);
                _context3.next = 18;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](8);

              case 18:
                _iteratorNormalCompletion = true;
                _context3.next = 6;
                break;

              case 21:
                _context3.next = 27;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t1 = _context3["catch"](4);
                _didIteratorError = true;
                _iteratorError = _context3.t1;

              case 27:
                _context3.prev = 27;
                _context3.prev = 28;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 30:
                _context3.prev = 30;

                if (!_didIteratorError) {
                  _context3.next = 33;
                  break;
                }

                throw _iteratorError;

              case 33:
                return _context3.finish(30);

              case 34:
                return _context3.finish(27);

              case 35:
                this.setState({
                  images: this.state.images.concat(images)
                }, function () {
                  if (_this12.props.autoUpload) {
                    images.forEach(function (image) {
                      return _this12.upload(image);
                    });
                  }

                  _this12.props.onChange(_this12.state.images, 'added');
                });

              case 36:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 23, 27, 35], [8, 16], [28,, 30, 34]]);
      }));

      function uploadFiles(_x4) {
        return _uploadFiles.apply(this, arguments);
      }

      return uploadFiles;
    }()
  }, {
    key: "getImageURLToBlob",
    value: function () {
      var _getImageURLToBlob = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(file) {
        var _this13 = this;

        var images,
            _this$props2,
            rules,
            accept,
            warning,
            ImageURL,
            size,
            limit,
            width,
            height,
            image,
            _args4 = arguments;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                images = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
                _this$props2 = this.props, rules = _this$props2.rules, accept = _this$props2.accept;
                images = images.concat(this.state.images);
                /*
                 * stop and send message
                 *
                */

                warning = function warning(key) {
                  _this13.onWarning(key, _objectSpread({}, rules, {
                    accept: accept,
                    file: file
                  }));

                  throw new Error();
                };

                if (!(0, _Utils.isAccepted)(file.type, accept.map(function (type) {
                  return "image/".concat(type);
                }))) {
                  warning('accept');
                }

                ImageURL = URL.createObjectURL(file); // if not available rules

                if (!(rules !== null)) {
                  _context4.next = 15;
                  break;
                }

                size = rules.size, limit = rules.limit, width = rules.width, height = rules.height;
                /**
                 * limit
                 * 
                */

                if (limit && images.length >= limit) {
                  warning('limit');
                }
                /**
                 * size
                 * 
                */


                if (size * 1024 < file.size) {
                  warning('size');
                }
                /**
                 * dimensions
                 * 
                */


                _context4.next = 12;
                return (0, _Utils.getImageDimensions)(ImageURL);

              case 12:
                image = _context4.sent;

                if (width) {
                  if (image.width < width.min) {
                    warning('minWidth');
                  } else if (image.width > width.max) {
                    warning('maxWidth');
                  }
                }

                if (height) {
                  if (image.height < height.min) {
                    warning('minHeight');
                  } else if (image.height > height.max) {
                    warning('maxHeight');
                  }
                }

              case 15:
                return _context4.abrupt("return", ImageURL);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getImageURLToBlob(_x5) {
        return _getImageURLToBlob.apply(this, arguments);
      }

      return getImageURLToBlob;
    }()
  }, {
    key: "upload",
    value: function upload(_ref3) {
      var uid = _ref3.uid,
          file = _ref3.file,
          data = _ref3.data,
          name = _ref3.name;
      var _this$props3 = this.props,
          action = _this$props3.action,
          headers = _this$props3.headers,
          customRequest = _this$props3.customRequest;
      var request = customRequest || _Request["default"];
      var send = {
        uid: uid,
        name: name
      };

      var _request = request({
        uid: uid,
        file: file,
        data: data,
        send: send,
        action: action,
        headers: headers,
        onError: this.onError,
        onSuccess: this.onSuccess,
        onProgress: this.onProgress
      }),
          abort = _request.abort;

      this.setImage(uid, {
        abort: abort,
        uploading: true
      });
    }
  }, {
    key: "setSort",
    value: function setSort(images) {
      var _this14 = this;

      this.setState({
        images: images
      }, function () {
        return _this14.props.onChange(images, 'sorted');
      });
    }
  }, {
    key: "showChildren",
    value: function showChildren(options) {
      var _this$props4 = this.props,
          type = _this$props4.type,
          sorting = _this$props4.sorting,
          children = _this$props4.children,
          images = this.state.images;

      switch ((0, _typeof2["default"])(children)) {
        case 'object':
          return children;

        case 'function':
          return children(images, options);

        default:
          return (0, _view["default"])({
            type: type,
            sorting: sorting
          }, images);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      // states
      var _this$state = this.state,
          images = _this$state.images,
          renderComponent = _this$state.renderComponent; // props

      var _this$props5 = this.props,
          className = _this$props5.className,
          style = _this$props5.style,
          accept = _this$props5.accept,
          header = _this$props5.header,
          footer = _this$props5.footer;
      var contextValue = {
        images: images,
        accept: accept,
        autoUpload: this.props.autoUpload,
        setSort: this.setSort,
        uploadFiles: this.uploadFiles,
        openDialogue: this.openDialogue
      },
          options = contextValue; // hide server side rendering

      if (!renderComponent) {
        return null;
      }

      return _react["default"].createElement(_Context["default"].Provider, {
        value: contextValue
      }, _react["default"].createElement("div", {
        className: "rug ".concat(className),
        style: style
      }, header && (typeof header === 'function' ? header(options) : (0, _Handle["default"])(options, header)), this.showChildren(options), footer && (typeof footer === 'function' ? footer(options) : (0, _Handle["default"])(options, footer)), _react["default"].createElement("input", {
        multiple: true,
        type: "file",
        ref: this.fileInput,
        className: "rug-file-input",
        accept: accept.map(function (type) {
          return "image/".concat(type);
        }),
        onChange: function onChange(event) {
          return _this15.uploadFiles(event.target.files);
        }
      })));
    }
  }]);
  return RUG;
}(_react["default"].Component);

RUG.propTypes = _PropTypes.propTypes;
RUG.defaultProps = _PropTypes.defaultProps;
var _default = RUG;
exports["default"] = _default;