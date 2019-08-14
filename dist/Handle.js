"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DropArea = _interopRequireDefault(require("./DropArea"));

var _default = function _default(options, _ref) {
  var handle = _ref.handle;
  return _react["default"].createElement(_DropArea["default"], null, function (isDrag) {
    return _react["default"].createElement("div", {
      className: "rug-handle ".concat(isDrag ? '__dragging' : '')
    }, _react["default"].createElement("svg", {
      viewBox: "0 -5 32 52",
      className: "rug-handle-icon"
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
    }))), _react["default"].createElement("div", {
      className: "rug-handle-info"
    }, typeof handle === 'function' ? handle(options) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
      className: "rug-handle-drop-text"
    }, "Drag and drop Images Here to Upload"), _react["default"].createElement("span", null, "Or"), _react["default"].createElement("div", {
      onClick: options.openDialogue,
      className: "rug-handle-button"
    }, "Select Images to Upload"))));
  });
};

exports["default"] = _default;