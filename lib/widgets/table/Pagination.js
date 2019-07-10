"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pagination;

var _react = require("react");

var _TablePagination = _interopRequireDefault(require("@material-ui/core/TablePagination"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Pagination(_ref) {
  var count = _ref.count,
      limit = _ref.limit,
      offset = _ref.offset,
      handleChangePage = _ref.handleChangePage,
      handleChangelimit = _ref.handleChangelimit;
  return React.createElement(_TablePagination["default"], {
    className: "custom-pagination",
    component: "div",
    count: count,
    rowsPerPage: limit,
    page: offset / limit,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangelimit,
    labelRowsPerPage: "Show",
    classes: {
      root: 'pagination_root',
      toolbar: 'pagination_toolbar',
      spacer: 'pagination_spacer',
      menuItem: 'pagination_menuItem',
      caption: 'pagination_caption',
      input: 'pagination_input',
      selectRoot: 'pagination_selectRoot',
      select: 'pagination_select',
      selectIcon: 'pagination_selectIcon',
      actions: 'pagination_actions'
    }
  });
}

Pagination.propTypes = {
  count: _propTypes["default"].number.isRequired,
  offset: _propTypes["default"].number.isRequired,
  limit: _propTypes["default"].number.isRequired
};
Pagination.defaultProps = {
  count: 0,
  offset: 0,
  limit: 0
};