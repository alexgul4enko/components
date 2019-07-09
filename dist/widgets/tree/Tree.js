"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tree;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _ExpansionComponent = _interopRequireDefault(require("./ExpansionComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Tree(_ref) {
  var data = _ref.data,
      checkActive = _ref.checkActive,
      handleChange = _ref.handleChange,
      renderItem = _ref.renderItem,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 0 : _ref$level;

  if ((0, _isEmpty["default"])(data) || !Array.isArray(data)) {
    return null;
  }

  return data.map(function (_ref2) {
    var title = _ref2.title,
        uuid = _ref2.uuid,
        children = _ref2.children,
        rest = _objectWithoutProperties(_ref2, ["title", "uuid", "children"]);

    return React.createElement(_ExpansionComponent["default"], _extends({
      key: uuid,
      uuid: uuid,
      title: title,
      active: checkActive(uuid),
      handleChange: handleChange,
      level: level,
      renderItem: renderItem,
      canBeToggled: Array.isArray(children)
    }, rest), !(0, _isEmpty["default"])(children) && React.createElement(Tree, {
      data: children,
      checkActive: checkActive,
      handleChange: handleChange,
      level: level + 1,
      renderItem: renderItem
    }));
  });
}