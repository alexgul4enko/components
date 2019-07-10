"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = gettext;
exports.TranslateProvider = exports.Translator = void 0;

var _react = require("react");

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

var storage = window.localStorage;
var browserLang = navigator.language || navigator.userLanguage;
var country = (storage.lang || browserLang.split('-')[0]).toLowerCase();
var translations = JSON.parse(storage.getItem('translations') || '{}');

var _createContext = (0, _react.createContext)({
  translations: translations
}),
    Provider = _createContext.Provider,
    Translator = _createContext.Consumer;

exports.Translator = Translator;

var TranslateProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(TranslateProvider, _Component);

  function TranslateProvider(props) {
    var _this;

    _classCallCheck(this, TranslateProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TranslateProvider).call(this, props));
    _this.state = {
      translations: translations // TODO: Fix API_URL variable reference.

    };
    fetch("".concat(process.env.API_URL, "translations/")).then(function (res) {
      return res.json();
    }).then(function (data) {
      _this.setState({
        translations: data
      });

      storage.setItem('translations', JSON.stringify(data));
    });
    _this.gettext = _this.gettext.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TranslateProvider, [{
    key: "gettext",
    value: function gettext(text) {
      if (!text) {
        return '';
      }

      return (0, _get["default"])(this.state.translations, "[".concat(text, "].").concat(country), (0, _get["default"])(this.state.translations, "[".concat(text, "].en"), text)) || text;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Provider, {
        value: {
          translations: this.state.translations,
          gettext: this.gettext
        }
      }, this.props.children);
    }
  }]);

  return TranslateProvider;
}(_react.Component);

exports.TranslateProvider = TranslateProvider;

function gettext(text) {
  return React.createElement(Translator, null, function (_ref) {
    var gettext = _ref.gettext;
    return gettext(text);
  });
}