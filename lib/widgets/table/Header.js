"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _SortableTableCell = _interopRequireDefault(require("./SortableTableCell"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _DragHandle = _interopRequireDefault(require("./DragHandle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Header(_ref) {
  var selectable = _ref.selectable,
      headers = _ref.headers,
      handleSelectAllChange = _ref.handleSelectAllChange,
      checked = _ref.checked,
      selected = _ref.selected,
      ActionsComponent = _ref.ActionsComponent,
      filters = _ref.filters,
      handleSort = _ref.handleSort,
      children = _ref.children,
      dnd = _ref.dnd;
  return React.createElement(_TableHead["default"], {
    className: "custom_table_header"
  }, React.createElement(_TableRow["default"], {
    className: "info_row"
  }, React.createElement(_TableCell["default"], {
    className: "info_cell",
    colSpan: headers.length + (selectable ? 1 : 0) + (dnd ? 1 : 0)
  }, React.createElement("div", {
    className: "custom_table_header_actions"
  }, React.createElement(ActionsComponent, {
    selected: selected
  }), children))), React.createElement(_TableRow["default"], null, dnd && React.createElement(_TableCell["default"], {
    className: "dnd_header_cell dnd_collumn"
  }, React.createElement(_DragHandle["default"], null)), selectable && React.createElement(_TableCell["default"], {
    className: "selectable_column"
  }, React.createElement(_Checkbox["default"], {
    checked: checked === 1,
    onChange: handleSelectAllChange,
    color: "primary",
    icon: checked === 0 ? React.createElement(_Icon["default"], {
      name: "indeterminate_check_box"
    }) : undefined
  })), headers.map(function (item) {
    return React.createElement(_TableCell["default"], {
      key: item.title
    }, React.createElement(_SortableTableCell["default"], _extends({}, item, {
      filters: filters,
      handleSort: handleSort
    })));
  })));
}

Header.defaultProps = {
  ActionsComponent: function ActionsComponent() {
    return null;
  }
};