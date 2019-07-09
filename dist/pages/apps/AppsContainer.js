"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var data = [{
  to: '/',
  title: 'Taxonomy',
  icon: 'settings_applications',
  disabled: false
}, {
  to: 'auth',
  title: 'QA Induction',
  icon: 'apps',
  disabled: true
}, {
  to: 'auth',
  title: 'Development Manual and FAQs',
  icon: 'apps',
  disabled: true
}, {
  to: 'auth',
  title: 'WDIO coding standards and best practice',
  icon: 'apps',
  disabled: true
}, {
  to: 'auth',
  title: 'Architecture Meeting Notes',
  icon: 'apps',
  disabled: true
}, {
  to: 'auth',
  title: 'Brand Manual',
  icon: 'apps',
  disabled: true
}, {
  to: 'auth',
  title: 'Tender Responses',
  icon: 'apps',
  disabled: true
}, {
  to: 'auth',
  title: 'Architecture',
  icon: 'apps',
  disabled: true
}];

var AppsContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AppsContainer, _PureComponent);

  function AppsContainer() {
    _classCallCheck(this, AppsContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppsContainer).apply(this, arguments));
  }

  _createClass(AppsContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(_App["default"], _extends({}, this.props, {
        data: data
      }));
    }
  }]);

  return AppsContainer;
}(_react.PureComponent);

exports["default"] = AppsContainer;