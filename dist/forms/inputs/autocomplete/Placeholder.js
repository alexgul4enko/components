"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Placeholder;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Placeholder(_ref) {
  var children = _ref.children,
      isFocused = _ref.isFocused,
      hasValue = _ref.hasValue,
      innerProps = _ref.innerProps;
  return React.createElement("p", _extends({
    className: "autocomplete_input_placeholder ".concat(!hasValue && !isFocused ? 'hidden' : '')
  }, innerProps), children, " ");
}