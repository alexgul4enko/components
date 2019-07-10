"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeaderControls;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("../../../widgets/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function HeaderControls(_ref) {
  var value = _ref.value,
      closeCrop = _ref.closeCrop,
      onDelete = _ref.onDelete,
      crop = _ref.crop,
      clear = _ref.clear,
      closeAndSave = _ref.closeAndSave;
  return React.createElement("div", {
    className: "header"
  }, React.createElement(_Button["default"], {
    variant: "outlined",
    onClick: clear
  }, "Remove selection"), React.createElement(_Button["default"], {
    variant: "outlined",
    onClick: crop
  }, "Maximize selection"), React.createElement(_Button["default"], {
    variant: "outlined",
    onClick: closeAndSave
  }, "Apply crop"), React.createElement(_IconButton["default"], {
    onClick: onDelete
  }, React.createElement(_Icon["default"], {
    name: "delete_outline"
  })), React.createElement(_IconButton["default"], {
    onClick: closeCrop
  }, React.createElement(_Icon["default"], {
    name: "close"
  })));
}