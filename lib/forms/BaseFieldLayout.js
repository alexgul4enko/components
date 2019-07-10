"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormHelperText2 = _interopRequireDefault(require("./inputs/FormHelperText"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseFieldLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(BaseFieldLayout, _Component);

  function BaseFieldLayout(props) {
    var _this;

    _classCallCheck(this, BaseFieldLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseFieldLayout).call(this, props));
    _this.uuid = (0, _v["default"])();
    return _this;
  }

  _createClass(BaseFieldLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefix = _this$props.prefix,
          required = _this$props.required,
          helperText = _this$props.helperText,
          maxLength = _this$props.maxLength,
          InputComponent = _this$props.inputComponent;
      return React.createElement(_FormControl["default"], {
        className: "form-group"
      }, React.createElement(InputComponent, _extends({}, this.props, this.props.input, {
        id: this.uuid
      })), (helperText || maxLength) && React.createElement(_FormHelperText2["default"], {
        required: required,
        maxLength: maxLength,
        length: (0, _get["default"])(this.props, 'value', '').length,
        id: this.uuid
      }, helperText), React.createElement(_FormHelperText["default"], {
        id: this.uuid,
        error: true
      }, this.props.meta.touched && this.props.meta.error));
    }
  }]);

  return BaseFieldLayout;
}(_react.Component);

exports["default"] = BaseFieldLayout;
BaseFieldLayout.propTypes = {
  icon: _propTypes["default"].node,
  label: _propTypes["default"].string,
  prefix: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  InputComponent: _propTypes["default"].element
};