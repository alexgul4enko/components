"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = noOptionsMessage;

function noOptionsMessage(_ref) {
  var inputValue = _ref.inputValue;

  if (!inputValue) {
    return React.createElement("span", null, "No results found");
  }

  return React.createElement("span", null, "No results found for ", React.createElement("b", null, inputValue));
}