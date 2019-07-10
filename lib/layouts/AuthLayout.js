"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppLayout;

var _Header = _interopRequireDefault(require("./Header"));

var _errors = require("../errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AppLayout(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "wrapper"
  }, React.createElement(_Header["default"], null, React.createElement("div", {
    className: "applogo"
  })), React.createElement("div", {
    className: "main"
  }, children), React.createElement(_errors.Toolbar, null));
}