"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _get = _interopRequireDefault(require("lodash/get"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Grow = _interopRequireDefault(require("../Grow"));

var _LoadingButton = _interopRequireDefault(require("../LoadingButton"));

var _hocs = require("../../hocs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CreateForm(_ref) {
  var addTitle = _ref.addTitle,
      active = _ref.active,
      setToggle = _ref.setToggle,
      dnd = _ref.dnd,
      selectable = _ref.selectable,
      FormElement = _ref.FormElement;
  var collapse = (0, _react.createRef)();
  return React.createElement(_react.Fragment, null, React.createElement(_Button["default"], {
    className: "add_new_table_row ".concat(dnd ? 'dnd' : '', " ").concat(selectable ? 'selectable' : ''),
    onClick: function onClick(_) {
      return setToggle(true);
    },
    disableTouchRipple: true
  }, React.createElement(_Icon["default"], {
    name: "add"
  }), addTitle), React.createElement(_Grow["default"], {
    AnimationElement: _Collapse["default"],
    active: active,
    onClose: function onClose(_) {
      return setToggle(false);
    },
    ref: collapse,
    wrapperClass: "collapsible_table_form ".concat(dnd ? 'dnd' : '', " ").concat(selectable ? 'selectable' : '')
  }, React.createElement(FormElement, {
    close: function close(_) {
      return (0, _get["default"])(collapse, 'current.close')();
    }
  })));
}

var _default = (0, _hocs.withModal)(CreateForm);

exports["default"] = _default;