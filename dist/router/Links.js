"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = exports.Link = void 0;

var _reactRouterDom = require("react-router-dom");

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _get = _interopRequireDefault(require("lodash/get"));

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

var _routerConfigs = require("./routerConfigs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NamedLink(LinkComponent) {
  return function (_ref) {
    var to = _ref.to,
        _ref$state = _ref.state,
        state = _ref$state === void 0 ? {} : _ref$state,
        props = _objectWithoutProperties(_ref, ["to", "state"]);

    var namedRoutes = (0, _routerConfigs.getRoterConfigs)();
    var path = (0, _get["default"])(namedRoutes, to, '');

    if (!path && !(0, _isEmpty["default"])(namedRoutes)) {
      throw new Error('no route with name: ' + to);
    }

    if (path.search(/\/:/)) {
      path = _pathToRegexp["default"].compile(path)(props);
    }

    return React.createElement(LinkComponent, _extends({
      to: {
        pathname: path,
        state: state
      }
    }, props));
  };
}

var Link = NamedLink(_reactRouterDom.Link);
exports.Link = Link;
var NavLink = NamedLink(_reactRouterDom.NavLink);
exports.NavLink = NavLink;