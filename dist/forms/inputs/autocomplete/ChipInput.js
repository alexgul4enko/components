"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _NoResults = _interopRequireDefault(require("./NoResults"));

var _Control = _interopRequireDefault(require("./Control"));

var _Placeholder = _interopRequireDefault(require("./Placeholder"));

var _OptionComponent = _interopRequireDefault(require("./OptionComponent"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _ValueContainer = _interopRequireDefault(require("./ValueContainer"));

var _SelectContainer = _interopRequireDefault(require("./SelectContainer"));

var _SingleValue = _interopRequireDefault(require("./SingleValue"));

var _MultiValue = _interopRequireDefault(require("./MultiValue"));

var _ClearIndicator = _interopRequireDefault(require("./ClearIndicator"));

var _DropdownIndicator = _interopRequireDefault(require("./DropdownIndicator"));

var _noOptionsMessage = _interopRequireDefault(require("./noOptionsMessage"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var components = {
  Control: _Control["default"],
  Menu: _Menu["default"],
  MultiValue: _MultiValue["default"],
  NoOptionsMessage: _NoResults["default"],
  Option: _OptionComponent["default"],
  Placeholder: _Placeholder["default"],
  SingleValue: _SingleValue["default"],
  ValueContainer: _ValueContainer["default"],
  SelectContainer: _SelectContainer["default"],
  ClearIndicator: _ClearIndicator["default"],
  DropdownIndicator: _DropdownIndicator["default"]
};

var ChipInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ChipInput, _Component);

  function ChipInput(props) {
    var _this;

    _classCallCheck(this, ChipInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChipInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value, _ref) {
      var action = _ref.action;
      return _this.props.onChange(value);
    });

    return _this;
  }

  _createClass(ChipInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          id = _this$props.id,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          options = _this$props.options,
          value = _this$props.value,
          isMulti = _this$props.isMulti,
          noOptionsMessage = _this$props.noOptionsMessage,
          required = _this$props.required,
          getOptionLabel = _this$props.getOptionLabel,
          getOptionValue = _this$props.getOptionValue,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          filterOption = _this$props.filterOption,
          formatOptionLabel = _this$props.formatOptionLabel;
      return React.createElement(_reactSelect["default"], {
        inputId: id,
        TextFieldProps: {
          label: label,
          InputLabelProps: {
            htmlFor: id,
            required: required,
            disabled: disabled,
            focused: !(0, _isEmpty["default"])(value) ? true : undefined,
            shrink: !(0, _isEmpty["default"])(value) ? true : undefined,
            onFocus: onFocus,
            onBlur: onBlur
          }
        },
        placeholder: placeholder,
        options: options,
        components: components,
        value: value,
        onChange: this.handleChange,
        isMulti: isMulti,
        noOptionsMessage: noOptionsMessage,
        getOptionLabel: getOptionLabel,
        getOptionValue: getOptionValue,
        isDisabled: disabled,
        filterOption: filterOption,
        formatOptionLabel: formatOptionLabel
      });
    }
  }]);

  return ChipInput;
}(_react.Component);

exports["default"] = ChipInput;
ChipInput.defaultProps = {
  emptyMessage: 'No data',
  placeholder: 'Search...',
  isMulti: false,
  getOptionLabel: function getOptionLabel(item) {
    return (0, _get["default"])(item, 'label');
  },
  getOptionValue: function getOptionValue(item) {
    return (0, _get["default"])(item, 'uuid');
  },
  required: false,
  noOptionsMessage: _noOptionsMessage["default"]
};