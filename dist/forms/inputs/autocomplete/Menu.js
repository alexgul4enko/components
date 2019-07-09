"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Menu;

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Menu(_ref) {
  var innerProps = _ref.innerProps,
      children = _ref.children;
  return React.createElement(_Paper["default"], _extends({
    square: true,
    className: "autocoplete-menu"
  }, innerProps), children);
}