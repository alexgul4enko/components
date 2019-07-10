"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Toolbar", {
  enumerable: true,
  get: function get() {
    return _Error["default"];
  }
});
Object.defineProperty(exports, "withGlobalError", {
  enumerable: true,
  get: function get() {
    return _Error.withGlobalError;
  }
});

var _Error = _interopRequireWildcard(require("./Error"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }