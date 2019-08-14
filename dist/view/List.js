"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _RefreshIcon = _interopRequireDefault(require("./RefreshIcon"));

var _UploadIcon = _interopRequireDefault(require("./UploadIcon"));

var List =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(List, _React$Component);

  function List() {
    var _this;

    (0, _classCallCheck2["default"])(this, List);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(List).call(this));
    _this.state = {
      spin: false
    };
    return _this;
  }

  (0, _createClass2["default"])(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$image = _this$props.image,
          uid = _this$props$image.uid,
          name = _this$props$image.name,
          size = _this$props$image.size,
          done = _this$props$image.done,
          abort = _this$props$image.abort,
          click = _this$props$image.click,
          error = _this$props$image.error,
          remove = _this$props$image.remove,
          source = _this$props$image.source,
          upload = _this$props$image.upload,
          refresh = _this$props$image.refresh,
          progress = _this$props$image.progress,
          uploading = _this$props$image.uploading,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["image"]),
          spin = this.state.spin,
          showProgress = !done && !error ? '__active' : '';
      return _react["default"].createElement("div", (0, _extends2["default"])({}, props, {
        key: uid,
        className: "rug-list"
      }), uploading && _react["default"].createElement("div", {
        className: "rug-list-progress ".concat(showProgress),
        style: {
          width: "".concat(progress, "%")
        }
      }), uploading && _react["default"].createElement("span", {
        className: "rug-list-progress-count ".concat(showProgress)
      }, progress || 0, "%"), !(done || error || uploading) && _react["default"].createElement("div", {
        onClick: upload,
        className: "rug-list-upload-button"
      }, _react["default"].createElement(_UploadIcon["default"], null)), error && typeof refresh === 'function' && _react["default"].createElement("div", {
        onClick: function onClick() {
          if (spin) return;

          _this2.setState({
            spin: true
          });

          setTimeout(function () {
            _this2.setState({
              spin: false
            });

            refresh();
          }, 700);
        },
        className: "rug-list-refresh ".concat(spin ? '__spin' : '')
      }, _react["default"].createElement("div", {
        style: {
          padding: 3
        }
      }, _react["default"].createElement(_RefreshIcon["default"], null))), _react["default"].createElement("div", {
        className: "rug-list-image",
        onClick: click
      }, _react["default"].createElement("img", {
        src: source,
        alt: name
      })), _react["default"].createElement("div", {
        className: "rug-list-content",
        onClick: click
      }, _react["default"].createElement("div", {
        className: "rug-list-name"
      }, name), _react["default"].createElement("div", {
        className: "rug-list-size"
      }, size)), _react["default"].createElement("div", {
        className: "rug-list-remove",
        onClick: remove
      }, _react["default"].createElement("svg", {
        viewBox: "0 0 40 40"
      }, _react["default"].createElement("path", {
        stroke: "current",
        strokeLinecap: "round",
        strokeWidth: "4",
        d: "M 10,10 L 30,30 M 30,10 L 10,30"
      }))));
    }
  }]);
  return List;
}(_react["default"].Component);

exports["default"] = List;