"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingButton;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LoadingButton(_ref) {
  var _ref$loadingColor = _ref.loadingColor,
      loadingColor = _ref$loadingColor === void 0 ? 'inherit' : _ref$loadingColor,
      children = _ref.children,
      loading = _ref.loading,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 28 : _ref$size,
      _ref$ButtonComponent = _ref.ButtonComponent,
      ButtonComponent = _ref$ButtonComponent === void 0 ? _Button["default"] : _ref$ButtonComponent,
      rest = _objectWithoutProperties(_ref, ["loadingColor", "children", "loading", "className", "size", "ButtonComponent"]);

  return React.createElement(ButtonComponent, _extends({}, rest, {
    className: "loading_button ".concat(className, " ").concat(loading ? 'loading' : 'hide_loading')
  }), React.createElement(_CircularProgress["default"], {
    className: "loading_indicator",
    size: size,
    color: loadingColor
  }), React.createElement("div", {
    className: "loading_button_content"
  }, children));
}