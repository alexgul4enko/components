"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.middleware = void 0;

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _pick = _interopRequireDefault(require("lodash/pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CACHE_STATE_KEYS = JSON.parse(process.env.CACHE_STATE_KEYS);
var state = JSON.parse(localStorage.getItem(process.env.STORAGE_KEY) || '{}');
exports.state = state;

var middleware = function middleware(store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      var nextState = store.getState();
      cacheState(CACHE_STATE_KEYS ? (0, _pick["default"])(nextState, CACHE_STATE_KEYS) : nextState);
      return result;
    };
  };
};

exports.middleware = middleware;
var cacheState = (0, _debounce["default"])(function (state) {
  localStorage.setItem(process.env.STORAGE_KEY, JSON.stringify(state));
});