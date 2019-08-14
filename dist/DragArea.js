"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactSortableHoc = require("react-sortable-hoc");

var _Context = _interopRequireDefault(require("./Context"));

var _Utils = require("./Utils");

var DragItem = (0, _reactSortableHoc.SortableElement)(function (_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", null, children);
});
var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
  var children = _ref2.children;
  return children;
});

var DragArea = function DragArea(props) {
  var children = props.children,
      className = props.className,
      style = props.style;
  return _react["default"].createElement(_Context["default"].Consumer, null, function (_ref3) {
    var images = _ref3.images,
        setSort = _ref3.setSort;
    return _react["default"].createElement(SortableList, (0, _extends2["default"])({}, props, {
      helperClass: "rug-dragging-item",
      onSortEnd: function onSortEnd(_ref4) {
        var oldIndex = _ref4.oldIndex,
            newIndex = _ref4.newIndex;
        setSort((0, _Utils.arrayMove)(images, oldIndex, newIndex));
      }
    }), _react["default"].createElement("div", {
      className: className,
      style: style
    }, images.map(function (image, key) {
      return _react["default"].createElement(DragItem, {
        key: key,
        index: key
      }, children(image));
    })));
  });
};

DragArea.defaultProps = {
  lockAxis: null,
  useWindowAsScrollContainer: true,
  pressDelay: 200,
  axis: 'xy',
  style: {}
};
var _default = DragArea;
exports["default"] = _default;