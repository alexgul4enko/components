"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RootSeachItem;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function RootSeachItem(_ref) {
  var _ref$item = _ref.item,
      title = _ref$item.title,
      to = _ref$item.to,
      search = _ref$item.search,
      rest = _objectWithoutProperties(_ref$item, ["title", "to", "search"]);

  return React.createElement("p", {
    className: "root_search_item"
  }, "\"", React.createElement("b", null, search), "\" ", title);
}