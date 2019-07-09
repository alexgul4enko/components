"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalConfirmationTrigger;

var _ModalTrigger = _interopRequireDefault(require("./ModalTrigger"));

var _ModalConfirmation = _interopRequireDefault(require("./ModalConfirmation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ModalConfirmationTrigger(props) {
  var onConfirm = props.onConfirm,
      statusClassName = props.statusClassName;
  return React.createElement(_ModalTrigger["default"], _extends({
    modalClassName: "".concat(statusClassName, " modal-confirmation"),
    component: _ModalConfirmation["default"],
    onConfirm: onConfirm
  }, props));
}