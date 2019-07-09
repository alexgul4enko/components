"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactSortableHoc = require("react-sortable-hoc");

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref) {
  var style = _ref.style,
      active = _ref.active;
  return React.createElement(_Tooltip["default"], {
    title: "DND functionality disabled, please clear custom filers to enable DND",
    disableFocusListener: !active,
    disableHoverListener: !active,
    disableTouchListener: !active
  }, React.createElement("div", {
    style: _objectSpread({}, style, {}, {
      cursor: 'move'
    }),
    className: active ? 'disable' : ''
  }, React.createElement(_Icon["default"], {
    name: "drag_indicator",
    size: 24
  })));
});
var _default = DragHandle;
exports["default"] = _default;