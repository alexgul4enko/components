"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _react = require("react");

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

var CustomGrow =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomGrow, _Component);

  function CustomGrow(props) {
    var _this;

    _classCallCheck(this, CustomGrow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomGrow).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      return _this.setState({
        animated: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setAnimated", function (animated) {
      return _this.setState({
        animated: animated
      });
    });

    _this.state = {
      animated: false
    };
    return _this;
  }

  _createClass(CustomGrow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          active = _this$props.active,
          onClose = _this$props.onClose,
          className = _this$props.className,
          _this$props$Animation = _this$props.AnimationElement,
          AnimationElement = _this$props$Animation === void 0 ? _Grow["default"] : _this$props$Animation,
          wrapperClass = _this$props.wrapperClass,
          _this$props$closeOnOu = _this$props.closeOnOutsideClick,
          closeOnOutsideClick = _this$props$closeOnOu === void 0 ? true : _this$props$closeOnOu;
      return React.createElement(AnimationElement, {
        "in": this.state.animated,
        onExited: onClose,
        className: className
      }, React.createElement("div", null, active && React.createElement(AnimatedChildren, {
        setAnimated: this.setAnimated,
        wrapperClass: wrapperClass,
        closeOnOutsideClick: closeOnOutsideClick
      }, children)));
    }
  }]);

  return CustomGrow;
}(_react.Component);

exports["default"] = CustomGrow;

var AnimatedChildren =
/*#__PURE__*/
function (_Component2) {
  _inherits(AnimatedChildren, _Component2);

  function AnimatedChildren() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, AnimatedChildren);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AnimatedChildren)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "close", function () {
      return _this2.props.setAnimated(false);
    });

    return _this2;
  }

  _createClass(AnimatedChildren, [{
    key: "render",
    value: function render() {
      return React.createElement(_ClickAwayListener["default"], {
        onClickAway: this.close,
        mouseEvent: this.props.closeOnOutsideClick && 'onClick',
        touchEvent: this.props.closeOnOutsideClick && 'onTouchStart'
      }, React.createElement("div", {
        className: this.props.wrapperClass
      }, this.props.children));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setAnimated(true);
    }
  }]);

  return AnimatedChildren;
}(_react.Component);