"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

var _get = _interopRequireDefault(require("lodash/get"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _reactDates = require("react-dates");

var _Grow = _interopRequireDefault(require("../../../widgets/Grow"));

var _Icon = _interopRequireDefault(require("../../../widgets/Icon"));

var _CallendarDay = _interopRequireDefault(require("./CallendarDay"));

var _DateInputComponent = _interopRequireDefault(require("./DateInputComponent"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toogleCalendar", function () {
      return _this.setState({
        show: !_this.state.show
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideCalendar", function () {
      return _this.setState({
        show: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref) {
      var formattedValue = _ref.formattedValue,
          floatValue = _ref.floatValue;

      if (!formattedValue) {
        return _this.props.onChange(formattedValue);
      }

      if (!(0, _utils.isFinishEditing)(_this.props.mask, _this.props.format, formattedValue)) {
        return;
      }

      if (!(0, _moment["default"])(formattedValue, _this.props.momentFormat).isValid()) {
        return;
      }

      _this.props.onChange(formattedValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.props.onBlur();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateChange", function (date) {
      _this.props.onChange(date.format(_this.props.momentFormat));

      (0, _get["default"])(_this.collapse, 'current.close')();
    });

    _this.state = {
      show: false
    };
    _this.id = props.id || (0, _v["default"])();
    _this.collapse = (0, _react.createRef)();
    return _this;
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isDayBlocked = _this$props.isDayBlocked,
          isOutsideRange = _this$props.isOutsideRange,
          isDayHighlighted = _this$props.isDayHighlighted,
          id = _this$props.id,
          label = _this$props.label,
          value = _this$props.value,
          placeholder = _this$props.placeholder,
          format = _this$props.format,
          mask = _this$props.mask,
          onChange = _this$props.onChange,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus;
      return React.createElement("div", {
        className: "date_picker"
      }, React.createElement(_DateInputComponent["default"], _extends({}, this.props, {
        id: this.id,
        handleChange: this.handleChange,
        toogleCalendar: this.toogleCalendar
      })), React.createElement(_Grow["default"], {
        active: this.state.show,
        onClose: function onClose(_) {
          return _this2.hideCalendar();
        },
        wrapperClass: "callendarModal",
        ref: this.collapse
      }, React.createElement("div", {
        className: "callendarModal"
      }, React.createElement(_reactDates.DayPickerSingleDateController, {
        numberOfMonths: 1,
        focused: this.state.show,
        onFocusChange: this.onFocusChange,
        isDayBlocked: isDayBlocked,
        isOutsideRange: isOutsideRange,
        isDayHighlighted: isDayHighlighted,
        date: this.props.value ? (0, _moment["default"])(this.props.value, this.props.momentFormat) : undefined,
        onDateChange: this.handleDateChange,
        navPrev: React.createElement(_IconButton["default"], {
          className: "callendar_month_button"
        }, React.createElement(_Icon["default"], {
          name: "keyboard_arrow_left"
        })),
        navNext: React.createElement(_IconButton["default"], {
          className: "callendar_month_button"
        }, React.createElement(_Icon["default"], {
          name: "keyboard_arrow_right"
        })),
        hideKeyboardShortcutsPanel: true,
        renderCalendarDay: function renderCalendarDay(props) {
          return React.createElement(_CallendarDay["default"], _extends({
            key: props.key
          }, props));
        }
      }))));
    }
  }]);

  return DatePicker;
}(_react.Component);

exports["default"] = DatePicker;
DatePicker.propTypes = {
  format: _propTypes["default"].string,
  mask: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  allowEmptyFormatting: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  momentFormat: _propTypes["default"].string
};
DatePicker.defaultProps = {
  format: '##/##/####',
  mask: '_',
  // ['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y'],
  allowEmptyFormatting: true,
  placeholder: 'DD/MM/YYYY',
  momentFormat: 'DD/MM/YYYY'
};