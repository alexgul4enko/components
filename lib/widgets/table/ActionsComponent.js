"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ActionsComponent;

var _react = require("react");

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ActionsComponent(_ref) {
  var names = _ref.names,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? [] : _ref$selected;
  return React.createElement("div", {
    className: "actions_wrapper ".concat((0, _isEmpty["default"])(selected) ? 'hidden' : '')
  }, React.createElement(_IconButton["default"], null, React.createElement(_Icon["default"], {
    name: "delete_outline"
  })), React.createElement(_IconButton["default"], null, React.createElement(_Icon["default"], {
    name: "vertical_align_bottom"
  })), React.createElement(_IconButton["default"], null, React.createElement(_Icon["default"], {
    name: "more_vert"
  })), "".concat(selected.length, " ").concat(selected.length === 1 ? "".concat(names[0], " on this page is selected") : "".concat(names[1], " on this page are selected")));
}