"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LabeledIcon;

var _Icon = _interopRequireDefault(require("./Icon"));

var _LoadingButton = _interopRequireDefault(require("./LoadingButton"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function LabeledIcon(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      active = _ref.active,
      className = _ref.className,
      onClick = _ref.onClick,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading;
  return React.createElement(_LoadingButton["default"], {
    className: className,
    onClick: onClick,
    loading: loading,
    disabled: loading,
    size: 20,
    loadingColor: "primary",
    disableRipple: true,
    ButtonComponent: _IconButton["default"]
  }, label ? React.createElement(_Badge["default"], {
    badgeContent: label,
    color: "error"
  }, React.createElement(_Icon["default"], {
    name: icon
  })) : React.createElement(_Icon["default"], {
    name: icon
  }));
}