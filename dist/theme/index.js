"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withStyles", {
  enumerable: true,
  get: function get() {
    return _ThemeProvider["default"];
  }
});
Object.defineProperty(exports, "ThemeWrap", {
  enumerable: true,
  get: function get() {
    return _ThemeProvider.Consumer;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function get() {
    return _ThemeProvider.ThemeProvider;
  }
});

var _ThemeProvider = _interopRequireWildcard(require("./ThemeProvider"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }