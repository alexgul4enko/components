"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SingleValue;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SingleValue(_ref) {
  var innerProps = _ref.innerProps,
      children = _ref.children;
  return React.createElement("div", _extends({
    className: "autocoplete_singleValue"
  }, innerProps), children);
}