"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _hocs = require("common/hocs");

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

var MenuListComposition =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuListComposition, _PureComponent);

  function MenuListComposition() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuListComposition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuListComposition)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event) {
      return !_this.anchorEl.contains(event.target) && _this.props.setToggle(false);
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemSelect", function () {
      _this.props.setToggle(false);

      _this.props.onSelect();
    });

    return _this;
  }

  _createClass(MenuListComposition, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          toggle = _this$props.toggle,
          active = _this$props.active,
          children = _this$props.children,
          items = _this$props.items;
      return React.createElement("div", {
        className: "custom_menu"
      }, React.createElement(_Button["default"], {
        buttonRef: function buttonRef(node) {
          return _this2.anchorEl = node;
        },
        "aria-owns": active ? 'menu-list-grow' : undefined,
        "aria-haspopup": "true",
        onClick: toggle
      }, children), React.createElement(_Popper["default"], {
        open: active,
        anchorEl: this.anchorEl,
        transition: true,
        disablePortal: true
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return React.createElement(_Grow["default"], _extends({}, TransitionProps, {
          id: "menu-list-grow",
          style: {
            transformOrigin: 'center bottom'
          }
        }), React.createElement(_Paper["default"], null, React.createElement(_ClickAwayListener["default"], {
          onClickAway: _this2.handleClose
        }, React.createElement(_MenuList["default"], {
          className: "custom_menu_list"
        }, items.map(function (title) {
          return React.createElement(_MenuItem["default"], {
            key: title,
            onClick: _this2.handleItemSelect
          }, title);
        })))));
      }));
    }
  }]);

  return MenuListComposition;
}(_react.PureComponent);

var _default = (0, _hocs.withModal)(MenuListComposition);

exports["default"] = _default;