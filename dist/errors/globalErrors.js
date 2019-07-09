"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.globalError = void 0;

var _reduxActions = require("redux-actions");

var _v = _interopRequireDefault(require("uuid/v4"));

var _handleActions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_GLOBAL_ERROR = 'SET_GLOBAL_ERROR';
var CLEAR_GLOBAL_ERROR = 'CLEAR_GLOBAL_ERROR';
var actions = {
  show: (0, _reduxActions.createAction)(SET_GLOBAL_ERROR),
  hide: (0, _reduxActions.createAction)(CLEAR_GLOBAL_ERROR)
};
exports.actions = actions;
var defaultState = {
  message: '',
  type: ''
};
var globalError = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, SET_GLOBAL_ERROR, function (state, action) {
  return _objectSpread({}, action.payload, {
    uuid: (0, _v["default"])()
  });
}), _defineProperty(_handleActions, CLEAR_GLOBAL_ERROR, function () {
  return defaultState;
}), _handleActions), defaultState);
exports.globalError = globalError;