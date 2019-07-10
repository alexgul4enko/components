"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _Tree = _interopRequireDefault(require("./Tree"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

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

var TreeContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TreeContainer, _PureComponent);

  function TreeContainer(_props) {
    var _this;

    _classCallCheck(this, TreeContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeContainer).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "getInitialActivePage", function (props) {
      var data = props.data,
          initialPage = props.initialPage;

      var activeItem = _this.findActive(data, initialPage);

      if ((0, _isEmpty["default"])(activeItem)) {
        return [];
      }

      return [activeItem.uuid];
    });

    _defineProperty(_assertThisInitialized(_this), "checkActive", function (uuid) {
      return _this.state.active.includes(uuid);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (item) {
      return function () {
        if ((0, _isEmpty["default"])(item)) {
          return;
        }

        if (_this.state.active.includes(item.uuid)) {
          return _this.setState({
            active: _this.state.active.filter(function (uuid) {
              return uuid !== item.uuid;
            })
          });
        }

        _this.setState({
          active: [].concat(_toConsumableArray(_this.state.active), [item.uuid])
        }, function () {
          _this.props.onOpen && _this.props.onOpen(item);
        });
      };
    });

    _this.state = {
      active: _this.getInitialActivePage(_props)
    };
    return _this;
  }

  _createClass(TreeContainer, [{
    key: "findActive",
    value: function findActive(data, currentPage) {
      var _this2 = this;

      if ((0, _isEmpty["default"])(data) || !Array.isArray(data)) {
        return false;
      }

      return data.find(function (item) {
        if (item.to === currentPage) {
          return true;
        }

        return _this2.findActive(item.children, currentPage);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_Tree["default"], _extends({}, this.state, this.props, {
        checkActive: this.checkActive,
        handleChange: this.handleChange,
        checkHightlight: this.checkHightlight
      }));
    }
  }]);

  return TreeContainer;
}(_react.PureComponent);

exports["default"] = TreeContainer;