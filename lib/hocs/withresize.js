"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withresize;

var _react = require("react");

var _reactDom = require("react-dom");

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

function withresize(ChildComponent) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Resizable, _Component);

    function Resizable(props) {
      var _this;

      _classCallCheck(this, Resizable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Resizable).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "resize", function () {
        return _this.recalculateHeight();
      });

      _defineProperty(_assertThisInitialized(_this), "recalculateHeight", function () {
        var _findDOMNode$getBound = (0, _reactDom.findDOMNode)(_assertThisInitialized(_this)).getBoundingClientRect(),
            width = _findDOMNode$getBound.width,
            height = _findDOMNode$getBound.height;

        if (_this.state.width !== width && _this.state.height !== height) {
          _this.setState({
            width: width,
            height: height
          });
        }
      });

      _this.state = {
        width: 0,
        height: 0
      };
      return _this;
    }

    _createClass(Resizable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.recalculateHeight();
        window.addEventListener('resize', this.resize);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        this.recalculateHeight();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(ChildComponent, this.state);
      }
    }]);

    return Resizable;
  }(_react.Component), _temp;
}