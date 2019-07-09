"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FeedsSidebar;

var _widgets = require("../../widgets");

var _FeedsContainer = _interopRequireDefault(require("./FeedsContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FeedsSidebar() {
  return React.createElement(_widgets.Drawer, {
    Label: FeedsLabel
  }, React.createElement(_FeedsContainer["default"], null));
}

function FeedsLabel(props) {
  return React.createElement(_widgets.LabeledIcon, _extends({
    icon: "description",
    label: "NEW"
  }, props));
}