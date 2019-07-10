"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = require("react");

function Header(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return React.createElement("header", {
    className: className
  }, React.createElement("div", {
    className: "header_container"
  }, children));
}