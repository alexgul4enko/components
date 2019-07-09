"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withStyles;
exports.Consumer = exports.ThemeProvider = void 0;

var _react = require("react");

var _styles = require("@material-ui/core/styles");

var _get = _interopRequireDefault(require("lodash/get"));

var _has = _interopRequireDefault(require("lodash/has"));

var _resource = _interopRequireDefault(require("@invotra/uiKIT/utils/resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ThemeContext = (0, _react.createContext)({
  branding: {}
});

var Theme =
/*#__PURE__*/
function (_Component) {
  _inherits(Theme, _Component);

  function Theme(props) {
    var _this;

    _classCallCheck(this, Theme);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Theme).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "createTheme", function (data) {
      var _data$link_colour = data.link_colour,
          link_colour = _data$link_colour === void 0 ? '#28a745' : _data$link_colour,
          mobile_icons_colour = data.mobile_icons_colour,
          navigation_first_level_nav_link = data.navigation_first_level_nav_link,
          navigation_menu_background_colour = data.navigation_menu_background_colour,
          primary_button_normal_state_border_colour = data.primary_button_normal_state_border_colour,
          primary_button_normal_state_colour = data.primary_button_normal_state_colour,
          standard_button_normal_state_border_colour = data.standard_button_normal_state_border_colour,
          standard_button_normal_state_colour = data.standard_button_normal_state_colour,
          toolbar_background_colour = data.toolbar_background_colour,
          toolbar_text_colour = data.toolbar_text_colour,
          vertical_tabs_colour = data.vertical_tabs_colour;
      var theme = (0, _styles.createMuiTheme)({
        palette: {
          primary: {
            main: link_colour
          },
          secondary: {
            main: '#11cb5f'
          }
        },
        typography: {
          useNextVariants: true
        }
      });

      _this.setState({
        theme: theme
      });
    });

    _this.state = {
      theme: (0, _styles.createMuiTheme)({
        palette: {
          primary: {
            main: '#28a745'
          },
          secondary: {
            main: '#11cb5f'
          }
        },
        typography: {
          useNextVariants: true
        }
      })
    };
    return _this;
  }

  _createClass(Theme, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.branding.fetch().then(this.createTheme);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ThemeContext.Provider, {
        value: {
          branding: this.props.branding.data
        }
      }, React.createElement(_styles.MuiThemeProvider, {
        theme: this.state.theme
      }, this.props.children));
    }
  }]);

  return Theme;
}(_react.Component);

function withStyles(ChildComponent) {
  return function stylesWrapped() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return React.createElement(ThemeContext.Consumer, null, function (_ref) {
      var branding = _ref.branding;
      return React.createElement(ChildComponent, _extends({
        branding: branding
      }, props));
    });
  };
}

var ThemeProvider = (0, _resource["default"])(['branding'])(Theme);
exports.ThemeProvider = ThemeProvider;
var Consumer = ThemeContext.Consumer;
exports.Consumer = Consumer;