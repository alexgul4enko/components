"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AppsContainer = _interopRequireDefault(require("./AppsContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _AppsContainer["default"],
  name: 'apps',
  exact: true
}];
var _default = routes;
exports["default"] = _default;