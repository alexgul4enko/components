"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _jquery = _interopRequireDefault(require("jquery"));

var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _HtmlView = _interopRequireDefault(require("./HtmlView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var HtmlViewContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(HtmlViewContainer, _Component);

  function HtmlViewContainer(props) {
    var _this;

    _classCallCheck(this, HtmlViewContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HtmlViewContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      var scrollPosition = _this.scrollElement.pageYOffset || _this.scrollElement.scrollTop;

      var activeIndex = _this.state.elements.findIndex(function (_ref, index) {
        var item = _ref.item;
        return item.offsetTop + (0, _jquery["default"])(item).outerHeight(true) >= scrollPosition || index === _this.state.elements.length - 1;
      });

      _this.setState({
        activeIndex: activeIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "buildElements", function () {
      var elements = _toConsumableArray((0, _reactDom.findDOMNode)(_assertThisInitialized(_this)).children).filter(function (item) {
        return item.nodeName === 'H1' || item.nodeName === 'H2' || item.nodeName === 'H3' || item.nodeName === 'H4';
      }).map(function (item) {
        return {
          text: item.innerText,
          item: item
        };
      }).filter(function (_ref2) {
        var text = _ref2.text;
        return !!(text && text.replace(/\s/g, ''));
      });

      _this.setState({
        elements: (0, _uniqBy["default"])(elements, 'text')
      });

      var links = _toConsumableArray((0, _reactDom.findDOMNode)(_assertThisInitialized(_this)).querySelectorAll('a'));

      links.forEach(function (item) {
        if ((0, _jquery["default"])(item).find('img').length > 0) {
          (0, _jquery["default"])(item).addClass('remove-hover');
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "scrollTo", function (item) {
      return function () {
        var top = item.offsetTop;

        _this.scrollElement.scrollTo({
          top: top,
          left: 0,
          behavior: 'smooth'
        });
      };
    });

    _this.state = {
      elements: [],
      activeIndex: 0
    };
    return _this;
  }

  _createClass(HtmlViewContainer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.body !== this.props.body || this.state.elements !== nextState.elements || this.state.activeIndex !== nextState.activeIndex;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollElement = document.getElementById(this.props.selector);
      this.scrollElement.onscroll = this.handleScroll;
      (0, _reactDom.findDOMNode)(this).addEventListener('resize', this.buildElements);
      this.scrollElement.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scrollElement.removeEventListener('scroll', this.handleScroll, false);
      (0, _reactDom.findDOMNode)(this).removeEventListener('resize', this.buildElements, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.body === this.props.body) {
        return;
      }

      this.buildElements();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_HtmlView["default"], _extends({}, this.props, this.state, {
        scrollTo: this.scrollTo
      }));
    }
  }]);

  return HtmlViewContainer;
}(_react.Component);

exports["default"] = HtmlViewContainer;