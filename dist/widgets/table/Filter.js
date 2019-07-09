"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

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

var Filer =
/*#__PURE__*/
function (_Component) {
  _inherits(Filer, _Component);

  function Filer(props) {
    var _this;

    _classCallCheck(this, Filer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Filer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var nativeEvent = _ref.nativeEvent,
          target = _ref.target;

      _this.setState({
        value: target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      _this.props.handleSearch(_this.state.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyPress", function (event) {
      switch (event.keyCode) {
        case 13:
          return _this.props.handleSearch(event.target.value);

        default:
      }
    });

    _this.state = {
      value: (0, _get["default"])(props, 'filters.fulltext_search', '')
    };
    return _this;
  }

  _createClass(Filer, [{
    key: "render",
    value: function render() {
      var placeholder = this.props.placeholder;
      return React.createElement("div", {
        className: "data_table_search"
      }, React.createElement(_TextField["default"], {
        label: placeholder,
        type: "search",
        margin: "normal",
        fullWidth: true,
        onChange: this.onChange,
        onBlur: this.onBlur,
        value: this.state.value,
        onKeyUp: this.onKeyPress
      }));
    }
  }]);

  return Filer;
}(_react.Component);

exports["default"] = Filer;