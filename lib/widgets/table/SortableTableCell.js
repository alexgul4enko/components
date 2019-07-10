"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SortableTableCell;

var _get = _interopRequireDefault(require("lodash/get"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SortableTableCell(_ref) {
  var title = _ref.title,
      orderBy = _ref.orderBy,
      filters = _ref.filters,
      handleSort = _ref.handleSort;
  var arrowIcon = orderBy !== (0, _get["default"])(filters, 'sort', null) ? 'swap_vert' : (0, _get["default"])(filters, 'order') === 'asc' ? 'arrow_upward' : 'arrow_downward';

  if (!orderBy) {
    return null;
  }

  return React.createElement(_Button["default"], {
    disableTouchRipple: true,
    disabled: !orderBy,
    onClick: handleSort(orderBy),
    className: "custom_table_sotrable_button"
  }, React.createElement(_Icon["default"], {
    name: arrowIcon,
    className: (0, _get["default"])(filters, 'sort', null) !== orderBy ? 'hidden' : '',
    size: 20
  }), title);
}