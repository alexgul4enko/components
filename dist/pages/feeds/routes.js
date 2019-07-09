"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FeedsContainer = _interopRequireDefault(require("./FeedsContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  routes: [{
    path: '/',
    exact: true,
    component: _FeedsContainer["default"]
  }]
}];
var _default = routes;
exports["default"] = _default;