"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _get = _interopRequireDefault(require("lodash/get"));

var _has = _interopRequireDefault(require("lodash/has"));

var _widgets = require("../../widgets");

var _resource = _interopRequireDefault(require("../../utils/resource"));

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

var Label =
/*#__PURE__*/
function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Label);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Label)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "checkNotifications", function () {
      _this.props.unread_notifications.fetch({
        offset: 0,
        limit: 100000
      }).then(function (_ref) {
        var results = _ref.results;
        var count = (results || []).filter(function (_ref2) {
          var status = _ref2.status;
          return !!status;
        }).length;

        _this.props.unread_notifications.setData({
          count: count
        }, {
          dataFunction: 'object'
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.checkNotifications();

      _this.props.onClick();
    });

    return _this;
  }

  _createClass(Label, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkNotifications();
    }
  }, {
    key: "render",
    value: function render() {
      var data = (0, _get["default"])(this.props, 'unread_notifications.data.count', 0);
      var loading = !(0, _has["default"])(this.props, 'unread_notifications.data.count');
      return React.createElement(_widgets.LabeledIcon, _extends({
        icon: "notifications_none",
        label: data > 99 ? '+99' : data,
        loading: loading
      }, this.props, {
        onClick: this.handleClick
      }));
    }
  }]);

  return Label;
}(_react.Component);

var _default = (0, _resource["default"])([{
  namespace: 'unread_notifications',
  endpoint: 'notifications',
  queries: ['offset', 'limit'],
  dataFunction: 'none'
}])(Label);

exports["default"] = _default;