"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withGlobalError = withGlobalError;
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _globalErrors = require("./globalErrors");

var _reactRedux = require("react-redux");

var _get2 = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Toolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar(props) {
    var _this;

    _classCallCheck(this, Toolbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).call(this, props));
    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(Toolbar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if ((0, _get2["default"])(this.props, 'data.uuid') !== (0, _get2["default"])(prevProps, 'data.uuid') && (0, _get2["default"])(this.props, 'data.message')) {
        this.setState({
          active: !!(0, _get2["default"])(this.props, 'data.message')
        }, function () {
          if (!(0, _get2["default"])(_this2.props, 'data.message')) {
            return;
          }

          _this2.subscription && clearTimeout(_this2.subscription);
          _this2.subscription = setTimeout(function () {
            _this2.setState({
              active: false
            });

            _this2.subscription = undefined;
          }, _this2.props.duration);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.subscription && clearTimeout(this.subscription);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _get = (0, _get2["default"])(this.props, 'data', {}),
          message = _get.message,
          type = _get.type;

      return React.createElement(_Snackbar["default"], {
        className: "global_error ".concat(type),
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.active,
        onClose: function onClose() {
          _this3.props.hide();
        },
        autoHideDuration: this.props.duration,
        message: React.createElement("span", {
          className: "global_error"
        }, message)
      });
    }
  }]);

  return Toolbar;
}(_react.Component);

Toolbar.defaultProps = {
  duration: 3000
};

var _default = (0, _reactRedux.connect)(function (_ref) {
  var globalError = _ref.globalError;
  return {
    data: globalError
  };
}, _globalErrors.actions)(Toolbar);

exports["default"] = _default;

function withGlobalError(ChildComponent) {
  return (0, _reactRedux.connect)(function () {
    return {};
  }, _globalErrors.actions)(ChildComponent);
}