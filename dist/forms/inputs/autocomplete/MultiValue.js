"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiValue;

var _Icon = _interopRequireDefault(require("../../../widgets/Icon"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MultiValue(_ref) {
  var children = _ref.children,
      removeProps = _ref.removeProps,
      isFocused = _ref.isFocused,
      selectProps = _ref.selectProps,
      rest = _objectWithoutProperties(_ref, ["children", "removeProps", "isFocused", "selectProps"]);

  return React.createElement(_Chip["default"], {
    label: children,
    className: "autocoplete_chip ".concat(isFocused ? 'active' : ''),
    onDelete: removeProps.onClick,
    deleteIcon: React.createElement("span", {
      className: "icon-clear",
      focusable: "false",
      "aria-hidden": "true",
      role: "presentation"
    })
  });
}