"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var func = function func() {};

var defaultProps = {
  action: '',
  className: '',
  ssrSupport: false,
  autoUpload: true,
  send: {},
  headers: {},
  style: {},
  accept: ['jpg', 'jpeg', 'png', 'gif'],
  initialState: [],
  type: 'card',
  sorting: true,
  header: true,
  footer: false,
  rules: null,
  customRequest: null,
  source: null,
  onSuccess: func,
  onWarning: func,
  onDeleted: func,
  onChange: func,
  onError: func,
  onClick: func,
  onCreated: func,
  onConfirmDelete: function onConfirmDelete() {
    return true;
  }
};
exports.defaultProps = defaultProps;
var propTypes = {
  action: _propTypes["default"].string,
  className: _propTypes["default"].string,
  ssrSupport: _propTypes["default"].bool,
  autoUpload: _propTypes["default"].bool,
  send: _propTypes["default"].object,
  headers: _propTypes["default"].object,
  style: _propTypes["default"].object,
  initialState: _propTypes["default"].arrayOf(_propTypes["default"].object),
  type: _propTypes["default"].oneOf(['card', 'list']),
  sorting: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]),
  header: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object, _propTypes["default"].func]),
  footer: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object, _propTypes["default"].func]),
  rules: _propTypes["default"].shape({
    size: _propTypes["default"].number,
    limit: _propTypes["default"].number,
    width: _propTypes["default"].shape({
      min: _propTypes["default"].number,
      max: _propTypes["default"].number
    }),
    height: _propTypes["default"].shape({
      min: _propTypes["default"].number,
      max: _propTypes["default"].number
    })
  }),
  customRequest: _propTypes["default"].func,
  source: _propTypes["default"].func,
  onSuccess: _propTypes["default"].func,
  onWarning: _propTypes["default"].func,
  onDeleted: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onCreated: _propTypes["default"].func,
  onConfirmDelete: _propTypes["default"].func,
  accept: _propTypes["default"].arrayOf(function (values, key, componentName, location, fullName) {
    var extensions = ['jpg', 'jpeg', 'png', 'gif'];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        if (extensions.indexOf(value) === -1) {
          return new Error("Invalid prop '".concat(fullName, "' supplied to '").concat(componentName, "'. Validation failed. Only '").concat(extensions.join(','), "'"));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  })
};
exports.propTypes = propTypes;