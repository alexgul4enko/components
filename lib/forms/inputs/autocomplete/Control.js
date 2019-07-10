"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Control;

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Control(_ref) {
  var children = _ref.children,
      innerProps = _ref.innerProps,
      innerRef = _ref.innerRef,
      selectProps = _ref.selectProps;
  return React.createElement(_TextField["default"], _extends({
    fullWidth: true,
    className: "autocomplete_input",
    InputProps: {
      inputComponent: inputComponent,
      inputProps: _objectSpread({
        ref: innerRef,
        children: children
      }, innerProps, {
        value: (0, _get["default"])(selectProps, 'TextFieldProps.value'),
        id: (0, _get["default"])(selectProps, 'TextFieldProps.htmlFor')
      })
    }
  }, (0, _get["default"])(selectProps, 'TextFieldProps', {})));
}

function inputComponent(_ref2) {
  var inputRef = _ref2.inputRef,
      props = _objectWithoutProperties(_ref2, ["inputRef"]);

  return React.createElement("div", _extends({
    ref: inputRef
  }, props));
}