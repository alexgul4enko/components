"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalWrapper;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  modalClassName: _propTypes["default"].string,
  title: _propTypes["default"].string,
  show: _propTypes["default"].bool,
  onHide: _propTypes["default"].func,
  ModalComponent: _propTypes["default"].element
};

function ModalWrapper(props) {
  var modalClassName = props.modalClassName,
      title = props.title,
      show = props.show,
      onHide = props.onHide,
      ModalComponent = props.component;
  return React.createElement(_reactBootstrap.Modal, {
    show: show,
    onHide: onHide,
    className: modalClassName
  }, React.createElement("div", {
    className: "modal-container"
  }, React.createElement(_reactBootstrap.Modal.Header, null, React.createElement(_reactBootstrap.Modal.Title, null, title), React.createElement("div", {
    className: "close-btn",
    onClick: onHide
  }, "\u2715")), React.createElement(_reactBootstrap.Modal.Body, null, React.createElement(ModalComponent, props))));
}

ModalWrapper.propTypes = propTypes;