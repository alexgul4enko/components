"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CurrencyInput =
/*#__PURE__*/
function (_Component) {
  _inherits(CurrencyInput, _Component);

  function CurrencyInput(props) {
    var _this;

    _classCallCheck(this, CurrencyInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurrencyInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$floatValue = _ref.floatValue,
          floatValue = _ref$floatValue === void 0 ? '' : _ref$floatValue,
          value = _ref.value;

      _this.props.onChange(_this.props.isNumber ? floatValue : value);
    });

    return _this;
  }

  _createClass(CurrencyInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          thousandSeparator = _this$props.thousandSeparator,
          prefix = _this$props.prefix,
          suffix = _this$props.suffix,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          id = _this$props.id,
          fullWidth = _this$props.fullWidth,
          currencuFormat = _this$props.currencuFormat,
          mask = _this$props.mask,
          thousandsGroupStyle = _this$props.thousandsGroupStyle,
          decimalScale = _this$props.decimalScale,
          fixedDecimalScale = _this$props.fixedDecimalScale,
          allowNegative = _this$props.allowNegative,
          allowEmptyFormatting = _this$props.allowEmptyFormatting,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          required = _this$props.required;
      var classes = prefix ? {
        root: 'currencyLabel',
        focused: 'focused'
      } : {};
      return React.createElement(_react.Fragment, null, React.createElement(_InputLabel["default"], {
        htmlFor: id,
        required: required,
        classes: classes
      }, label), React.createElement(_Input["default"], {
        placeholder: placeholder,
        value: value,
        onChange: this.handleChange,
        fullWidth: fullWidth,
        id: id,
        onBlur: onBlur,
        onFocus: onFocus,
        inputComponent: CurrencyInputComponent,
        required: required,
        inputProps: {
          format: currencuFormat,
          mask: mask,
          thousandsGroupStyle: thousandsGroupStyle,
          thousandSeparator: thousandSeparator,
          decimalScale: decimalScale,
          fixedDecimalScale: fixedDecimalScale,
          allowNegative: allowNegative,
          allowEmptyFormatting: allowEmptyFormatting
        },
        endAdornment: suffix && React.createElement(_InputAdornment["default"], {
          position: "end"
        }, suffix),
        startAdornment: prefix && React.createElement(_InputAdornment["default"], {
          position: "start"
        }, prefix)
      }));
    }
  }]);

  return CurrencyInput;
}(_react.Component);

var _default = CurrencyInput;
exports["default"] = _default;

function CurrencyInputComponent(_ref2) {
  var inputRef = _ref2.inputRef,
      onChange = _ref2.onChange,
      other = _objectWithoutProperties(_ref2, ["inputRef", "onChange"]);

  return React.createElement(_reactNumberFormat["default"], _extends({}, other, {
    getInputRef: inputRef,
    onValueChange: onChange
  }));
}

CurrencyInput.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  thousandSeparator: _propTypes["default"].bool,
  prefix: _propTypes["default"].string,
  suffix: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  fullWidth: _propTypes["default"].bool,
  currencuFormat: _propTypes["default"].string,
  thousandsGroupStyle: _propTypes["default"].string,
  mask: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  isNumber: _propTypes["default"].bool,
  allowEmptyFormatting: _propTypes["default"].bool
};
CurrencyInput.defaultProps = {
  value: '',
  thousandSeparator: true,
  fullWidth: true,
  isNumber: true,
  allowEmptyFormatting: true
};