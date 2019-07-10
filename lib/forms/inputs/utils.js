"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeVariants = void 0;

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function prepareData(array, keyExtractor, labelExtractor) {
  if ((0, _isEmpty["default"])(array) || !Array.isArray(array)) {
    return [];
  }

  if (!keyExtractor || !valueExtractor) {
    return array;
  }

  return array.map(function (item) {
    return _objectSpread({
      label: labelExtractor(item),
      value: keyExtractor(item)
    }, item);
  });
}

var makeVariants = (0, _memoizeOne["default"])(prepareData);
exports.makeVariants = makeVariants;