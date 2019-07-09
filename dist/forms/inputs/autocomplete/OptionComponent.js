"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OptionComponent;

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function OptionComponent(_ref) {
  var innerRef = _ref.innerRef,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      innerProps = _ref.innerProps,
      children = _ref.children;
  return React.createElement(_MenuItem["default"], _extends({
    ref: innerRef,
    selected: isFocused,
    component: "div",
    className: "autocopleteItem ".concat(isSelected ? 'active' : '')
  }, innerProps), children);
}