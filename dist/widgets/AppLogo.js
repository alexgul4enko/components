"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _theme = require("../theme");

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AppLogo(_ref) {
  var branding = _ref.branding;
  var src = (0, _get["default"])(branding, 'logo');

  if (!src) {
    return null;
  }

  return React.createElement("img", {
    className: "site_logo",
    src: src
  });
}

var _default = (0, _theme.withStyles)(AppLogo);

exports["default"] = _default;