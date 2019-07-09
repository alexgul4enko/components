"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loading;

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Loading(_ref) {
  var isLoading = _ref.isLoading,
      children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size;
  return isLoading ? React.createElement("div", {
    className: "loading_wrapper"
  }, React.createElement(_CircularProgress["default"], {
    size: size,
    color: "primary"
  })) : children;
}