"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SessionLayout;

var _errors = require("../errors");

function SessionLayout(_ref) {
  var children = _ref.children;
  return React.createElement("main", {
    className: "session_layout"
  }, React.createElement("header", null, " ", React.createElement("div", {
    className: "applogo"
  })), React.createElement("div", {
    className: "main"
  }, children), React.createElement(_errors.Toolbar, null));
}