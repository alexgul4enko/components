"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalConfirmation;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ModalConfirmation(_ref) {
  var onHide = _ref.onHide,
      title = _ref.title,
      active = _ref.active,
      description = _ref.description,
      okTitle = _ref.okTitle,
      cancelTitle = _ref.cancelTitle,
      handleAction = _ref.handleAction;
  return React.createElement(_Dialog["default"], {
    open: active,
    onClose: onHide,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, React.createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, title), React.createElement(_DialogContent["default"], null, React.createElement(_DialogContentText["default"], {
    id: "alert-dialog-description"
  }, description)), React.createElement(_DialogActions["default"], null, React.createElement(_Button["default"], {
    onClick: handleAction(true),
    color: "primary"
  }, okTitle), React.createElement(_Button["default"], {
    onClick: handleAction(false),
    color: "primary",
    autoFocus: true
  }, cancelTitle)));
}