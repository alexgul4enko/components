"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NoResults;

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function NoResults(_ref) {
  var children = _ref.children,
      selectProps = _ref.selectProps,
      innerProps = _ref.innerProps;
  return React.createElement(_ListItem["default"], _extends({
    className: "empty_select_data"
  }, innerProps), children);
}