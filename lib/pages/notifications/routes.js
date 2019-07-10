"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _NotificatoinsContainer = _interopRequireDefault(require("./NotificatoinsContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  routes: [{
    path: '/',
    exact: true,
    component: _NotificatoinsContainer["default"]
  }]
}];
var _default = routes;
exports["default"] = _default;