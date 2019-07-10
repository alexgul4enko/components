"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _theme = require("../../../theme");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _has = _interopRequireDefault(require("lodash/has"));

var _get = _interopRequireDefault(require("lodash/get"));

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function CallendarDay(_ref) {
  var day = _ref.day,
      isFocused = _ref.isFocused,
      isOutsideDay = _ref.isOutsideDay,
      isOutsideRange = _ref.isOutsideRange,
      key = _ref.key,
      ariaLabel = _ref.ariaLabel,
      onDayClick = _ref.onDayClick,
      onDayMouseEnter = _ref.onDayMouseEnter,
      onDayMouseLeave = _ref.onDayMouseLeave,
      modifiers = _ref.modifiers,
      branding = _ref.branding,
      rest = _objectWithoutProperties(_ref, ["day", "isFocused", "isOutsideDay", "isOutsideRange", "key", "ariaLabel", "onDayClick", "onDayMouseEnter", "onDayMouseLeave", "modifiers", "branding"]);

  if (!day) {
    return React.createElement("td", null);
  }

  return React.createElement("td", {
    key: key,
    className: "CalendarDay CalendarDay_1 CalendarDay__default",
    role: "button",
    "aria-label": ariaLabel
  }, React.createElement(_IconButton["default"], {
    key: key,
    style: getStyles(modifiers, branding),
    disabled: isOutsideDay || isOutsideRange,
    onClick: function onClick(e) {
      return onDayClick(day, e);
    },
    onMouseEnter: function onMouseEnter(e) {
      return onDayMouseEnter(day, e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return onDayMouseLeave(day, e);
    }
  }, day.date()));
}

var _default = (0, _theme.withStyles)(CallendarDay);

exports["default"] = _default;

function parseColor(branding) {
  var color = (0, _tinycolor["default"])((0, _get["default"])(branding, 'link_colour', '#005EA5'));
  var primary = (0, _tinycolor["default"])(color);
  var primaryAlpha = (0, _tinycolor["default"])(color);
  primaryAlpha.setAlpha(0.5);
  return {
    primary: {
      color: primary.isLight() ? '#000' : '#fff',
      backgroundColor: primary.toHexString()
    },
    lighter: {
      color: primaryAlpha.isLight() ? '#000' : '#fff',
      backgroundColor: primaryAlpha.toRgbString()
    }
  };
}

var memoizeColor = (0, _memoizeOne["default"])(parseColor);

function getStyles(modifiers, branding) {
  if (!modifiers) {
    return {};
  }

  var primary = memoizeColor(branding).primary;

  if (modifiers.has('selected')) {
    return primary;
  }

  if (modifiers.has('selected-start')) {
    return primary;
  }

  if (modifiers.has('selected-end')) {
    return primary;
  }

  if (modifiers.has('selected-span')) {
    return _objectSpread({}, memoizeColor(branding).lighter);
  }
}