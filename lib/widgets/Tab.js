"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Links = require("../router/Links");

var _theme = require("../theme");

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Tab(_ref) {
  var to = _ref.to,
      className = _ref.className,
      title = _ref.title,
      branding = _ref.branding;
  return React.createElement(_Links.NavLink, {
    to: to,
    className: "tabs_navigation_link ".concat(className),
    style: {
      color: (0, _get["default"])(branding, 'link_colour')
    }
  }, title, React.createElement("div", {
    className: "tabs_navigation_divider",
    style: {
      backgroundColor: (0, _get["default"])(branding, 'link_colour')
    }
  }));
}

var _default = (0, _theme.withStyles)(Tab);

exports["default"] = _default;