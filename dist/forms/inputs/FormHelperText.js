"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FormHelperText;

function FormHelperText(_ref) {
  var required = _ref.required,
      children = _ref.children,
      maxLength = _ref.maxLength,
      length = _ref.length;
  return React.createElement("span", {
    className: "input_helper"
  }, required && '*', children, maxLength && React.createElement("span", {
    className: "restr"
  }, length, "/", maxLength));
}