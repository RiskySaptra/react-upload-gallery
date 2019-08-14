"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _Utils = require("./Utils");

var Request = function Request(_ref) {
  var uid = _ref.uid,
      send = _ref.send,
      file = _ref.file,
      action = _ref.action,
      headers = _ref.headers,
      onProgress = _ref.onProgress,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError;
  var xhr = new XMLHttpRequest();
  /**
   * Progress Percentage
   * 
  */

  if (xhr.upload) {
    xhr.upload.onprogress = function (_ref2) {
      var loaded = _ref2.loaded,
          total = _ref2.total;
      onProgress(uid, parseInt(Math.round(loaded / total * 100).toFixed(2)));
    };
  }
  /**
   * onLoad Request
   * 
   * 
  */


  xhr.onload = function () {
    var response = (0, _Utils.getBody)(xhr),
        status = xhr.status;

    if (status < 200 || status >= 300) {
      return onError(uid, {
        action: action,
        status: status
      });
    }

    onSuccess(uid, response);
  }; // Error


  xhr.onerror = function () {
    var response = (0, _Utils.getBody)(xhr),
        status = xhr.status;
    onError(uid, {
      action: action,
      status: status,
      response: response
    });
  };

  xhr.onabort = function () {
    var response = (0, _Utils.getBody)(xhr),
        status = xhr.status;
    onError(uid, {
      action: action,
      status: status,
      response: response
    });
  };

  xhr.open('POST', action, true); // if the value is null by default, the request will not be executed

  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }
  /**
   * Custom Headers
   * 
  */


  for (var h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }

  var Form = new FormData();
  Object.entries(send).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    Form.append(key, value);
  });
  Form.append('file', file);
  xhr.send(Form);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
};

var _default = Request;
exports["default"] = _default;