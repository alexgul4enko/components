"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryParams = parseQueryParams;
exports.buildQueryParams = buildQueryParams;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var convertValueFor = ['ordering'];
var integers = ['offset', 'limit'];

function parseQueryParams(str) {
  if (str.length <= 2) {
    return {}; // '' || '?'
  }

  return str.substr(1) // symbol '?'
  .split('&').reduce(function (params, param) {
    var paramSplit = param.split('=').map(function (chunk) {
      return decodeURIComponent(chunk.replace('+', '%20'));
    });
    var name = paramSplit[0];
    var value = paramSplit[1];

    if (integers.includes(name)) {
      value = parseInt(value, 10);
    }

    params[name] = params.hasOwnProperty(name) ? [].concat(params[name], value) : value;
    return params;
  }, {});
}

function buildQueryParams(params) {
  if ((0, _isEmpty["default"])(params)) {
    return '';
  }

  return Object.keys(params).reduce(function (ret, key) {
    var value = params[key];

    if (value === null || value === undefined) {
      return ret;
    }

    if (!Array.isArray(value)) {
      value = [value];
    }

    value.forEach(function (val) {
      if (String(val).length > 0) {
        ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
      }
    }); // TODO null should not be here, check field components

    return ret;
  }, []).join('&');
}