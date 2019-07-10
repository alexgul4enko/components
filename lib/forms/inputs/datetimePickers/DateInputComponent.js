"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DateInputComponent;

var _react = require("react");

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Icon = _interopRequireDefault(require("../../../widgets/Icon"));

var _MaskedInput = _interopRequireDefault(require("./MaskedInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DateInputComponent(_ref) {
  var id = _ref.id,
      label = _ref.label,
      value = _ref.value,
      placeholder = _ref.placeholder,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      format = _ref.format,
      required = _ref.required,
      mask = _ref.mask,
      onChange = _ref.onChange,
      toogleCalendar = _ref.toogleCalendar,
      handleChange = _ref.handleChange,
      shrink = _ref.shrink;
  return React.createElement(_react.Fragment, null, React.createElement(_InputLabel["default"], {
    shrink: shrink,
    htmlFor: id,
    required: required
  }, label, " "), React.createElement(_Input["default"], {
    id: id,
    value: value,
    placeholder: placeholder,
    inputComponent: _MaskedInput["default"],
    onBlur: onBlur,
    onFocus: onFocus,
    required: required,
    inputProps: _defineProperty({
      format: format,
      mask: mask,
      onChange: onChange
    }, "onChange", handleChange),
    endAdornment: React.createElement(_InputAdornment["default"], {
      position: "end"
    }, React.createElement(_IconButton["default"], {
      onClick: toogleCalendar
    }, React.createElement(_Icon["default"], {
      name: "today"
    })))
  }));
}