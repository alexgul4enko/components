"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _get = _interopRequireDefault(require("lodash/get"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _LoadingButton = _interopRequireDefault(require("../LoadingButton"));

var _Grow = _interopRequireDefault(require("../Grow"));

var _hocs = require("../../hocs");

var _DragHandle = _interopRequireDefault(require("./DragHandle"));

var _reactSortableHoc = require("react-sortable-hoc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Row = (0, _reactSortableHoc.SortableElement)(function (props) {
  return React.createElement(_TableRow["default"], props);
});

function EditableRow(_ref) {
  var active = _ref.active,
      setToggle = _ref.setToggle,
      handleSelectClick = _ref.handleSelectClick,
      row = _ref.row,
      selectable = _ref.selectable,
      editable = _ref.editable,
      renderRow = _ref.renderRow,
      selected = _ref.selected,
      headers = _ref.headers,
      index = _ref.index,
      dndEnabled = _ref.dndEnabled,
      dnd = _ref.dnd,
      FormElement = _ref.FormElement;
  var collapse = (0, _react.createRef)();
  return React.createElement(_react.Fragment, null, React.createElement(Row, {
    index: index,
    disabled: !dndEnabled
  }, React.createElement(_react.Fragment, null, dnd && React.createElement(_TableCell["default"], {
    className: "dnd_handler_cell dnd_collumn"
  }, React.createElement(_DragHandle["default"], {
    className: "",
    active: !dndEnabled
  })), selectable && React.createElement(_TableCell["default"], {
    className: "selectable_column"
  }, React.createElement(_Checkbox["default"], {
    checked: !!selected,
    onChange: handleSelectClick(row),
    color: "primary"
  })), renderRow(_objectSpread({}, row, {
    selected: selected
  })), editable && React.createElement(_TableCell["default"], null, React.createElement(_Button["default"], {
    onClick: function onClick() {
      return setToggle(true);
    },
    className: "editable_row_button",
    disableTouchRipple: true
  }, "Edit")))), editable && React.createElement(_TableRow["default"], {
    className: "collapsible_row_edit"
  }, React.createElement(_TableCell["default"], {
    className: "collapsible_cell_edit",
    colSpan: headers.length + (selectable ? 1 : 0) + (dnd ? 1 : 0)
  }, React.createElement(_Grow["default"], {
    AnimationElement: _Collapse["default"],
    active: active,
    onClose: function onClose(_) {
      return setToggle(false);
    },
    ref: collapse,
    wrapperClass: "collapsible_table_form ".concat(dnd ? 'dnd' : '', " ").concat(selectable ? 'selectable' : '')
  }, React.createElement(FormElement, {
    close: function close(_) {
      return (0, _get["default"])(collapse, 'current.close')();
    },
    initialValues: row
  })))));
}

var _default = (0, _hocs.withModal)(EditableRow);

exports["default"] = _default;