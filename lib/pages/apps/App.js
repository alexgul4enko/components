"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Apps;

var _AppItem = _interopRequireDefault(require("./AppItem"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Apps(_ref) {
  var data = _ref.data;
  return React.createElement("div", {
    className: "apps_page"
  }, React.createElement("div", {
    className: "wrap-apps"
  }, React.createElement("h1", {
    className: "title"
  }, "Apps to supercharge your enterprise intranet"), React.createElement("h2", {
    className: "subtitle"
  }, "Invotra Apps"), React.createElement(_Grid["default"], {
    container: true,
    alignItems: "center",
    spacing: 16
  }, data.map(function (_ref2) {
    var title = _ref2.title,
        rest = _objectWithoutProperties(_ref2, ["title"]);

    return React.createElement(_AppItem["default"], _extends({
      key: title,
      title: title
    }, rest));
  }))));
}