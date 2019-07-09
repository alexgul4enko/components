"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxInput = CheckboxInput;
exports.CheckboxesInput = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CheckboxInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      label = _ref.label,
      classes = _ref.classes,
      checkedIcon = _ref.checkedIcon,
      disabled = _ref.disabled,
      disableRipple = _ref.disableRipple,
      icon = _ref.icon,
      required = _ref.required,
      inputClassName = _ref.inputClassName,
      data = _ref.data;
  return React.createElement(_react.Fragment, null, React.createElement(_FormLabel["default"], {
    required: required,
    className: "form-controll-label"
  }, label), React.createElement(_FormControlLabel["default"], {
    control: React.createElement(_Checkbox["default"], {
      className: inputClassName,
      checkedIcon: checkedIcon,
      icon: icon,
      classes: classes,
      disabled: disabled,
      disableRipple: disableRipple,
      checked: Boolean(value),
      onChange: function onChange(e) {
        return _onChange(e.target.checked);
      },
      color: "primary"
    }),
    label: data
  }));
}

CheckboxInput.propTypes = {
  inputClassName: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  data: _propTypes["default"].string
};
CheckboxInput.defaultProps = {
  inputClassName: 'custom-checkbox',
  data: ''
};

var CheckboxesInput =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckboxesInput, _Component);

  function CheckboxesInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckboxesInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxesInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      return function (e) {
        if (e.target.checked) {
          return _this.props.onChange([].concat(_toConsumableArray(_this.props.value), [value]));
        }

        _this.props.onChange((_this.props.value || []).filter(function (item) {
          return item !== value;
        }));
      };
    });

    return _this;
  }

  _createClass(CheckboxesInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          keyExtractor = _this$props.keyExtractor,
          labelExtractor = _this$props.labelExtractor,
          checkedIcon = _this$props.checkedIcon,
          icon = _this$props.icon,
          classes = _this$props.classes,
          disableRipple = _this$props.disableRipple,
          disabled = _this$props.disabled,
          inputClassName = _this$props.inputClassName,
          label = _this$props.label,
          required = _this$props.required;
      var variants = (0, _utils.makeVariants)(data, keyExtractor, labelExtractor);
      return React.createElement(_react.Fragment, null, React.createElement(_FormLabel["default"], {
        required: required,
        className: "form-controll-label"
      }, label), variants.map(function (_ref2) {
        var itemLabel = _ref2.label,
            value = _ref2.value,
            rest = _objectWithoutProperties(_ref2, ["label", "value"]);

        return React.createElement(_FormControlLabel["default"], {
          key: value,
          control: React.createElement(_Checkbox["default"], {
            color: "primary",
            checked: _this2.props.value.includes(value),
            onChange: _this2.handleChange(value),
            className: inputClassName,
            checkedIcon: checkedIcon,
            icon: icon,
            classes: classes,
            disabled: rest.disabled || disabled,
            disableRipple: disableRipple
          }),
          label: itemLabel
        });
      }));
    }
  }]);

  return CheckboxesInput;
}(_react.Component);

exports.CheckboxesInput = CheckboxesInput;
CheckboxesInput.propTypes = {
  inputClassName: _propTypes["default"].string,
  data: _propTypes["default"].array,
  value: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string]),
  label: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]),
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool
};
CheckboxesInput.defaultProps = {
  inputClassName: 'custom-checkbox'
};