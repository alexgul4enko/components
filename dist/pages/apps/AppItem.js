"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppItem;

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _widgets = require("../../widgets");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AppItem(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      to = _ref.to,
      disabled = _ref.disabled;
  return React.createElement(_Grid["default"], {
    item: true,
    xs: 12,
    sm: 4,
    md: 3,
    className: "apps_grid_item  ".concat(disabled && 'disabled')
  }, React.createElement("a", {
    href: to,
    disabled: disabled,
    className: "link-style ".concat(disabled && 'disabled', " hover_shadow_animation")
  }, React.createElement(_widgets.Icon, {
    name: icon,
    className: "icon"
  }), React.createElement("p", {
    className: "app-title"
  }, title)));
}