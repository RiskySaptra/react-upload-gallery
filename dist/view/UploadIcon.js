"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _default = function _default() {
  return _react["default"].createElement("svg", {
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
  })));
};

exports["default"] = _default;