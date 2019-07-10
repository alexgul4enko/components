"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _redux = require("redux");

var _reduxForm = require("redux-form");

var _LoginForm = _interopRequireDefault(require("./LoginForm"));

var _resource = _interopRequireDefault(require("../../utils/resource"));

var _errors = require("../../errors");

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

var LoginFormContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LoginFormContainer, _PureComponent);

  function LoginFormContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoginFormContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginFormContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (params, dispatch) {
      return _this.props.user.create(params).then(function (_) {
        return _this.props.user.fetch({}, {
          endpoint: 'users/me',
          dataFunction: 'replace'
        });
      })["catch"](function (message) {
        _this.props.show({
          message: 'check your login or password',
          type: 'error'
        });

        throw new Error(message);
      });
    });

    return _this;
  }

  _createClass(LoginFormContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(_LoginForm["default"], _extends({}, this.props, {
        handleSubmit: this.props.handleSubmit(this.onSubmit)
      }));
    }
  }]);

  return LoginFormContainer;
}(_react.PureComponent);

var _default = (0, _redux.compose)((0, _resource["default"])([{
  namespace: 'user',
  endpoint: 'sessions/login',
  dataFunction: 'none'
}]), (0, _reduxForm.reduxForm)({
  form: 'login'
}), _errors.withGlobalError)(LoginFormContainer);

exports["default"] = _default;