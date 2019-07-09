"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

function Icon(_ref) {
  var name = _ref.name,
      color = _ref.color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      size = _ref.size;
  return React.createElement("i", {
    className: "icon-".concat(name, " ").concat(className),
    style: {
      color: color,
      fontSize: "".concat(size, "px")
    }
  });
}