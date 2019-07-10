"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _reactSortableHoc = require("react-sortable-hoc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DragableBody = (0, _reactSortableHoc.SortableContainer)(function (_ref) {
  var children = _ref.children,
      displayRowCheckbox = _ref.displayRowCheckbox;
  return React.createElement(_TableBody["default"], null, children);
});
DragableBody.muiName = 'TableBody';
var _default = DragableBody;
exports["default"] = _default;