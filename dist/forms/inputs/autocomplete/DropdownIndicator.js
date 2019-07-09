"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DropdownIndicator;

var _Icon = _interopRequireDefault(require("../../../widgets/Icon"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DropdownIndicator(_ref) {
  var isFocused = _ref.isFocused,
      innerProps = _ref.innerProps;
  return React.createElement(_IconButton["default"], _extends({
    className: "autocoplete_dropdown ".concat(isFocused ? 'active' : '')
  }, innerProps), React.createElement(_Icon["default"], {
    name: "keyboard_arrow_down"
  }));
}