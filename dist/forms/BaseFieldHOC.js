"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BaseFieldHOC;

var _reduxForm = require("redux-form");

var _BaseFieldLayout = _interopRequireDefault(require("./BaseFieldLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function BaseFieldHOC(Component) {
  return function (props) {
    return React.createElement(_reduxForm.Field, _extends({
      component: _BaseFieldLayout["default"],
      inputComponent: Component
    }, props));
  };
}