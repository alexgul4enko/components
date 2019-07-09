"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FeedsSidebar;

var _react = require("react");

var _SwipeableDrawer = _interopRequireDefault(require("@material-ui/core/SwipeableDrawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function FeedsSidebar(_ref) {
  var Label = _ref.Label,
      toggle = _ref.toggle,
      active = _ref.active,
      setToggle = _ref.setToggle,
      children = _ref.children,
      _ref$containerClass = _ref.containerClass,
      containerClass = _ref$containerClass === void 0 ? '' : _ref$containerClass;
  return React.createElement(_react.Fragment, null, React.createElement(_SwipeableDrawer["default"], {
    className: "custom_drawer",
    open: active,
    onClose: function onClose() {
      return setToggle(false);
    },
    onOpen: function onOpen() {
      return setToggle(true);
    },
    anchor: "right"
  }, React.createElement("div", {
    className: "drawer_container ".concat(containerClass)
  }, children)), React.createElement(Label, {
    active: active,
    className: "drawer_label ".concat(active ? 'toggled' : '', " "),
    onClick: toggle
  }));
}