"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PhoneTextInput;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPhoneNumberInput = _interopRequireWildcard(require("react-phone-number-input"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _has = _interopRequireDefault(require("lodash/has"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PhoneTextInput(_ref) {
  var label = _ref.label,
      helperText = _ref.helperText,
      inputClassName = _ref.inputClassName,
      required = _ref.required,
      toggle = _ref.toggle,
      setToggle = _ref.setToggle,
      active = _ref.active,
      input = _ref.input,
      meta = _ref.meta,
      allowEmptyFormatting = _ref.allowEmptyFormatting,
      inputComponent = _ref.inputComponent,
      rest = _objectWithoutProperties(_ref, ["label", "helperText", "inputClassName", "required", "toggle", "setToggle", "active", "input", "meta", "allowEmptyFormatting", "inputComponent"]);

  return React.createElement(_reactPhoneNumberInput["default"], _extends({}, rest, {
    inputComponent: InputComponent,
    touched: meta.touched
  }));
}

var InputComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(InputComponent, _Component);

  function InputComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      if ((0, _has["default"])(event, 'formattedValue')) {
        return _this.props.onChange("+".concat(event.value));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focus", function () {
      return null;
    });

    return _this;
  }

  _createClass(InputComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.focus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.country !== this.props.country && this.props.country) {
        this.input && this.input.focus();
        var value = (0, _get["default"])(this.props, "metadata.countries[".concat(this.props.country, "][0]"));

        if (!this.props.value) {
          return this.props.onChange("+".concat(value));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fullWidth = _this$props.fullWidth,
          id = _this$props.id,
          autoComplete = _this$props.autoComplete,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus,
          type = _this$props.type,
          makeRef = _this$props.makeRef,
          phoneFormat = _this$props.phoneFormat,
          mask = _this$props.mask,
          allowEmptyFormatting = _this$props.allowEmptyFormatting,
          country = _this$props.country,
          value = _this$props.value;
      return React.createElement(_Input["default"], {
        fullWidth: true,
        inputRef: function inputRef(ref) {
          return _this2.input = ref;
        },
        ref: makeRef,
        value: value,
        autoComplete: autoComplete,
        onBlur: onBlur,
        onChange: this.handleChange,
        type: type,
        inputComponent: PhoneInputComponent,
        className: "phone_input_component",
        inputProps: {
          format: phoneFormat,
          mask: mask,
          allowEmptyFormatting: allowEmptyFormatting
        }
      });
    }
  }]);

  return InputComponent;
}(_react.Component);

function PhoneInputComponent(_ref2) {
  var inputRef = _ref2.inputRef,
      onChange = _ref2.onChange,
      other = _objectWithoutProperties(_ref2, ["inputRef", "onChange"]);

  return React.createElement(_reactNumberFormat["default"], _extends({}, other, {
    getInputRef: inputRef,
    onValueChange: onChange,
    allowEmptyFormatting: true
  }));
}

PhoneTextInput.propTypes = {
  phoneFormat: _propTypes["default"].string,
  mask: _propTypes["default"].string,
  allowEmptyFormatting: _propTypes["default"].bool
};
PhoneTextInput.defaultProps = {
  phoneFormat: '+## (###) ###-####',
  mask: '_',
  allowEmptyFormatting: true
};