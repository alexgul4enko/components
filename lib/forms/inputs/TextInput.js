"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../widgets/Icon"));

var _withModal = _interopRequireDefault(require("../../hocs/withModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextInput =
/*#__PURE__*/
function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      if (_this.props.maxLength && e.target.value.length > _this.props.maxLength) {
        return;
      }

      _this.props.onChange(e.target.value);
    });

    return _this;
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inputComponent = _this$props.inputComponent,
          label = _this$props.label,
          helperText = _this$props.helperText,
          inputClassName = _this$props.inputClassName,
          required = _this$props.required,
          maxLength = _this$props.maxLength,
          toggle = _this$props.toggle,
          setToggle = _this$props.setToggle,
          active = _this$props.active,
          input = _this$props.input,
          meta = _this$props.meta,
          autoComplete = _this$props.autoComplete,
          id = _this$props.id,
          rest = _objectWithoutProperties(_this$props, ["inputComponent", "label", "helperText", "inputClassName", "required", "maxLength", "toggle", "setToggle", "active", "input", "meta", "autoComplete", "id"]);

      return React.createElement(_react.Fragment, null, React.createElement(_InputLabel["default"], {
        htmlFor: id,
        required: required
      }, label), React.createElement(_Input["default"], _extends({}, rest, {
        id: id,
        className: inputClassName,
        onChange: this.handleChange,
        required: required,
        autoComplete: autoComplete || rest.name,
        endAdornment: rest.type === 'password' ? React.createElement(_InputAdornment["default"], {
          position: "end"
        }, React.createElement(_IconButton["default"], {
          className: "input-custom-password-button",
          onClick: toggle
        }, React.createElement(_Icon["default"], {
          name: active ? 'visibility' : 'visibility_off'
        }))) : undefined,
        type: rest.type === 'password' && active ? 'text' : rest.type
      })));
    }
  }]);

  return TextInput;
}(_react.Component);

var _default = (0, _withModal["default"])(TextInput);

exports["default"] = _default;
TextInput.propTypes = {
  inputClassName: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  pattern: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  value: _propTypes["default"].string
};
TextInput.defaultProps = {
  inputClassName: 'input-custom',
  readOnly: false
};