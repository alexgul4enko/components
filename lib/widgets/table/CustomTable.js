"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableFooter = _interopRequireDefault(require("@material-ui/core/TableFooter"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Filter = _interopRequireDefault(require("./Filter"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _Header = _interopRequireDefault(require("./Header"));

var _withTables = _interopRequireDefault(require("./withTables"));

var _CreateForm = _interopRequireDefault(require("./CreateForm"));

var _EditableRow = _interopRequireDefault(require("./EditableRow"));

var _DragableBody = _interopRequireDefault(require("./DragableBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CustomTable(_ref) {
  var renderRow = _ref.renderRow,
      keyExtractor = _ref.keyExtractor,
      selectable = _ref.selectable,
      data = _ref.data,
      headers = _ref.headers,
      ActionsComponent = _ref.ActionsComponent,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? {} : _ref$filters,
      fetch = _ref.fetch,
      count = _ref.count,
      placeholder = _ref.placeholder,
      selected = _ref.selected,
      handleSelectAllChange = _ref.handleSelectAllChange,
      headerCheckBoxValue = _ref.headerCheckBoxValue,
      checkSelected = _ref.checkSelected,
      handleSelectClick = _ref.handleSelectClick,
      handleChangePage = _ref.handleChangePage,
      handleChangelimit = _ref.handleChangelimit,
      handleSort = _ref.handleSort,
      handleSearch = _ref.handleSearch,
      permissions = _ref.permissions,
      Form = _ref.Form,
      addTitle = _ref.addTitle,
      onDragEnd = _ref.onDragEnd,
      dnd = _ref.dnd;
  var dndEnabled = !(0, _get["default"])(filters, 'order') && !(0, _get["default"])(filters, 'sort') && !(0, _get["default"])(filters, 'fulltext_search');
  return React.createElement("div", {
    className: "data_table"
  }, React.createElement(_Filter["default"], {
    handleSearch: handleSearch,
    placeholder: placeholder,
    filters: filters
  }), React.createElement(_Table["default"], {
    className: "custom-table ".concat(selectable ? 'selectable' : '')
  }, React.createElement(_Header["default"], {
    selectable: selectable,
    headers: headers,
    handleSelectAllChange: handleSelectAllChange,
    checked: headerCheckBoxValue(),
    selected: selected,
    ActionsComponent: ActionsComponent,
    filters: filters,
    handleSort: handleSort,
    dnd: dnd
  }, React.createElement(_Pagination["default"], _extends({}, filters, {
    count: count,
    handleChangePage: handleChangePage,
    handleChangelimit: handleChangelimit
  }))), React.createElement(_DragableBody["default"], {
    onSortEnd: onDragEnd,
    useDragHandle: true
  }, (0, _get["default"])(permissions, 'create') && React.createElement(_TableRow["default"], {
    className: "collapsible_row create_row"
  }, React.createElement(_TableCell["default"], {
    className: "collapsible_cell",
    colSpan: headers.length + (dnd ? 1 : 0) + (selectable ? 1 : 0)
  }, React.createElement(_CreateForm["default"], {
    addTitle: addTitle,
    dnd: dnd,
    selectable: selectable,
    FormElement: Form
  }))), data.map(function (item, index) {
    return React.createElement(_EditableRow["default"], {
      dnd: dnd,
      dndEnabled: dndEnabled,
      index: index,
      row: item,
      key: keyExtractor(item),
      selected: checkSelected(item) > -1,
      handleSelectClick: handleSelectClick,
      selectable: selectable,
      renderRow: renderRow,
      headers: headers,
      editable: (0, _get["default"])(permissions, 'edit'),
      FormElement: Form
    });
  })), React.createElement(_TableFooter["default"], null, React.createElement(_TableRow["default"], null, React.createElement(_TableCell["default"], {
    colSpan: headers.length + (selectable ? 1 : 0) + (dnd ? 1 : 0)
  }, React.createElement(_Pagination["default"], _extends({}, filters, {
    count: count,
    handleChangePage: handleChangePage,
    handleChangelimit: handleChangelimit
  })))))));
}

var _default = (0, _withTables["default"])(CustomTable);

exports["default"] = _default;
CustomTable.propTypes = {
  renderRow: _propTypes["default"].func.isRequired,
  Header: _propTypes["default"].func,
  HeaderExtra: _propTypes["default"].func,
  keyExtractor: _propTypes["default"].func.isRequired,
  onSelectChange: _propTypes["default"].func
};
CustomTable.defaultProps = {
  keyExtractor: function keyExtractor(item) {
    return item.id;
  },
  onSelectChange: function onSelectChange() {}
};