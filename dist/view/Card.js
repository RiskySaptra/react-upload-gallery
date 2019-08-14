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

var Card =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Card, _React$Component);

  function Card() {
    var _this;

    (0, _classCallCheck2["default"])(this, Card);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Card).call(this));
    _this.state = {
      spin: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Card, [{
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
          spin = this.state.spin;
      console.log(source);
      return _react["default"].createElement("div", (0, _extends2["default"])({}, props, {
        key: uid,
        className: "rug-card ".concat(error ? '__error' : '')
      }), _react["default"].createElement("div", {
        className: "rug-card-name",
        onClick: click
      }, _react["default"].createElement("div", null, name, _react["default"].createElement("div", {
        className: "rug-card-size"
      }, size))), _react["default"].createElement("div", {
        style: {
          backgroundImage: "url(".concat(source, ")")
        },
        onClick: click,
        className: "rug-card-image"
      }), !done && !error && uploading && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("svg", {
        viewBox: "0 0 36 38",
        className: "rug-card-progress"
      }, _react["default"].createElement("path", {
        className: "__progress-cricle",
        style: {
          strokeDasharray: "".concat(progress, ", 100")
        },
        d: "M18 2.5845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      })), _react["default"].createElement("div", {
        className: "rug-card-progress-count"
      }, progress)), !(done || error || uploading) && _react["default"].createElement("div", {
        onClick: upload,
        className: "rug-card-upload-button"
      }, _react["default"].createElement("svg", {
        viewBox: "0 -5 32 52"
      }, _react["default"].createElement("g", null, _react["default"].createElement("polyline", {
        points: "1 19 1 31 31 31 31 19"
      }), _react["default"].createElement("polyline", {
        className: "__arrow",
        points: "8 9 16 1 24 9"
      }), _react["default"].createElement("line", {
        className: "__arrow",
        x1: "16",
        x2: "16",
        y1: "1",
        y2: "25"
      })))), error && typeof refresh === 'function' && _react["default"].createElement("div", {
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
        className: "rug-card-refresh ".concat(spin ? '__spin' : '')
      }, _react["default"].createElement("div", {
        style: {
          padding: 7
        }
      }, _react["default"].createElement(_RefreshIcon["default"], null))), _react["default"].createElement("div", {
        className: "rug-card-remove",
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
  return Card;
}(_react["default"].Component);

exports["default"] = Card;