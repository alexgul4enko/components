"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationsSidebar;

var _widgets = require("../../widgets");

var _Label = _interopRequireDefault(require("./Label"));

var _NotificatoinsContainer = _interopRequireDefault(require("./NotificatoinsContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NotificationsSidebar() {
  return React.createElement(_widgets.Drawer, {
    Label: _Label["default"]
  }, React.createElement(_NotificatoinsContainer["default"], null));
}