"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _reactColor = require("react-color");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../widgets/Icon"));

var _Grow = _interopRequireDefault(require("../../widgets/Grow"));

var _withModal = _interopRequireDefault(require("../../hocs/withModal"));

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

var ColorInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorInput, _Component);

  function ColorInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ColorInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ColorInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref) {
      var hex = _ref.hex;
      return _this.props.onChange(hex);
    });

    return _this;
  }

  _createClass(ColorInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          uuid = _this$props.uuid,
          label = _this$props.label,
          toggle = _this$props.toggle,
          value = _this$props.value,
          active = _this$props.active;
      return React.createElement("div", {
        className: "color_picker_wrapper"
      }, React.createElement(_FormLabel["default"], {
        className: "form-controll-label"
      }, label), React.createElement(_Button["default"], {
        onClick: !active ? toggle : undefined,
        className: "color_picker_button",
        type: "button"
      }, React.createElement("div", {
        className: "color_value",
        style: {
          backgroundColor: value
        }
      }), React.createElement(_Icon["default"], {
        name: "arrow_drop_down"
      })), React.createElement(_Grow["default"], {
        active: active,
        onClose: toggle,
        className: "pickers_modal"
      }, React.createElement(_reactColor.ChromePicker, {
        color: this.props.value || undefined,
        onChangeComplete: this.handleChange,
        disableAlpha: true
      })));
    }
  }]);

  return ColorInput;
}(_react.Component);

var _default = (0, _withModal["default"])(ColorInput);

exports["default"] = _default;
ColorInput.propTypes = {
  onChange: _propTypes["default"].func.isRequired
};
ColorInput.defaultProps = {};