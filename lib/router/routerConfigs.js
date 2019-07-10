"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routesMap = routesMap;
exports.getRoterConfigs = getRoterConfigs;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RouterConfigurations =
/*#__PURE__*/
function () {
  function RouterConfigurations() {
    _classCallCheck(this, RouterConfigurations);

    this.routes = {};
  }

  _createClass(RouterConfigurations, [{
    key: "buildRoutes",
    value: function buildRoutes(routes) {
      var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
      this.routes = this.routesMap.apply(this, arguments);
      return this.routes;
    }
  }, {
    key: "getRoutes",
    value: function getRoutes() {
      return this.routes;
    }
  }, {
    key: "routesMap",
    value: function routesMap(routes) {
      var _this = this;

      var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
      return routes.reduce(function (acc, _ref) {
        var name = _ref.name,
            path = _ref.path,
            routes = _ref.routes;

        if (!path) {
          return acc;
        }

        path = makePath(path, basePath);

        if (name) {
          acc = _objectSpread({}, acc, _defineProperty({}, name, path));
        }

        if (routes) {
          acc = _objectSpread({}, acc, {}, _this.routesMap(routes, path));
        }

        return acc;
      }, {});
    }
  }]);

  return RouterConfigurations;
}();

var Router = new RouterConfigurations();

function makePath(path, basePath) {
  return (basePath + path).replace(/\/+/g, '/');
}

function routesMap() {
  return Router.buildRoutes.apply(Router, arguments);
}

function getRoterConfigs() {
  return Router.getRoutes();
}