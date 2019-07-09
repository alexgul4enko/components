"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomAutocomplete =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CustomAutocomplete, _PureComponent);

  function CustomAutocomplete(_props) {
    var _this;

    _classCallCheck(this, CustomAutocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomAutocomplete).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, _ref) {
      var newValue = _ref.newValue,
          method = _ref.method;

      var value = _this.props.getSuggestionValue(newValue);

      switch (method) {
        case 'up':
        case 'down':
          _this.setState({
            value: value
          });

          return _this.selectedObject = newValue;

        case 'enter':
        case 'click':
          _this.setState({
            value: ''
          });

          _this.props.onSelect && _this.props.onSelect(newValue);
          return _this.selectedObject = undefined;

        default:
          if (_this.selectedObject) {
            _this.props.onSelect && _this.props.onSelect(_this.selectedObject);

            _this.setState({
              value: ''
            });

            _this.selectedObject = undefined;
          }

          _this.setState({
            value: newValue
          });

          return _this.selectedObject = undefined;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      switch (event.keyCode) {
        case 27:
          event.stopPropagation();
          event.preventDefault();

          _this.setState({
            value: ''
          });

          _this.selectedObject = undefined;
          return _this.props.onSelect && _this.props.onSelect({});

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestion", function (item, _ref2) {
      var isHighlighted = _ref2.isHighlighted,
          query = _ref2.query;
      var _this$props = _this.props,
          renderItem = _this$props.renderItem,
          passQeury = _this$props.passQeury;

      var props = _objectSpread({
        item: item
      }, passQeury ? {
        query: query
      } : {});

      return React.createElement(_MenuItem["default"], {
        selected: isHighlighted,
        component: "div",
        className: "autocomplite_item"
      }, renderItem(props));
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionsFetchRequested", function (_ref3) {
      var _fetch;

      var value = _ref3.value,
          reason = _ref3.reason;
      var _this$props2 = _this.props,
          fetch = _this$props2.fetch,
          limit = _this$props2.limit,
          searchKey = _this$props2.searchKey;

      if (!fetch) {
        return;
      }

      switch (reason) {
        case 'input-changed':
          return fetch((_fetch = {}, _defineProperty(_fetch, searchKey, value), _defineProperty(_fetch, "offset", 0), _defineProperty(_fetch, "limit", limit), _fetch), {
            dataFunction: 'replace'
          });

        case 'input-focused':
        case 'escape-pressed':
        case 'suggestions-revealed':
        case 'suggestion-selected':
        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionsClearRequested", function () {
      _this.props.setData && _this.props.setData(undefined, {
        dataFunction: 'replace'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSectionTitle", function () {});

    _defineProperty(_assertThisInitialized(_this), "renderInputComponent", function (_ref4) {
      var _ref4$inputRef = _ref4.inputRef,
          _inputRef = _ref4$inputRef === void 0 ? function () {} : _ref4$inputRef,
          ref = _ref4.ref,
          other = _objectWithoutProperties(_ref4, ["inputRef", "ref"]);

      return React.createElement(_Input["default"], _extends({
        fullWidth: true,
        inputRef: function inputRef(node) {
          ref(node);

          _inputRef(node);
        }
      }, other));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestionsContainer", function (options) {
      return React.createElement(_Paper["default"], _extends({}, options.containerProps, {
        square: true,
        className: "".concat((0, _get["default"])(options, 'containerProps.className', ''), " custom_autocomplite")
      }), options.children);
    });

    _this.state = {
      value: ''
    };
    _this.id = (0, _v["default"])();
    return _this;
  }

  _createClass(CustomAutocomplete, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          suggestions = _this$props3.suggestions,
          getSuggestionValue = _this$props3.getSuggestionValue,
          onSuggestionHighlighted = _this$props3.onSuggestionHighlighted,
          alwaysRenderSuggestions = _this$props3.alwaysRenderSuggestions,
          highlightFirstSuggestion = _this$props3.highlightFirstSuggestion,
          focusInputOnSuggestionClick = _this$props3.focusInputOnSuggestionClick,
          getSectionSuggestions = _this$props3.getSectionSuggestions,
          shouldRenderSuggestions = _this$props3.shouldRenderSuggestions,
          multiSection = _this$props3.multiSection,
          renderItem = _this$props3.renderItem,
          passQeury = _this$props3.passQeury,
          fetch = _this$props3.fetch,
          searchKey = _this$props3.searchKey,
          limit = _this$props3.limit,
          setData = _this$props3.setData,
          onSelect = _this$props3.onSelect,
          close = _this$props3.close,
          _inputProps = _objectWithoutProperties(_this$props3, ["suggestions", "getSuggestionValue", "onSuggestionHighlighted", "alwaysRenderSuggestions", "highlightFirstSuggestion", "focusInputOnSuggestionClick", "getSectionSuggestions", "shouldRenderSuggestions", "multiSection", "renderItem", "passQeury", "fetch", "searchKey", "limit", "setData", "onSelect", "close"]);

      var value = this.state.value;

      var inputProps = _objectSpread({}, _inputProps, {
        value: value,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyPress
      });

      return React.createElement(_reactAutosuggest["default"], {
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: function getSuggestionValue(data, event) {
          return data;
        },
        renderSuggestion: this.renderSuggestion,
        inputProps: inputProps,
        onSuggestionHighlighted: onSuggestionHighlighted,
        shouldRenderSuggestions: shouldRenderSuggestions,
        alwaysRenderSuggestions: alwaysRenderSuggestions,
        highlightFirstSuggestion: highlightFirstSuggestion,
        focusInputOnSuggestionClick: focusInputOnSuggestionClick,
        multiSection: multiSection,
        renderSectionTitle: this.renderSectionTitle,
        getSectionSuggestions: getSectionSuggestions,
        renderInputComponent: this.renderInputComponent,
        id: this.id,
        renderSuggestionsContainer: this.renderSuggestionsContainer
      });
    }
  }]);

  return CustomAutocomplete;
}(_react.PureComponent);

exports["default"] = CustomAutocomplete;
CustomAutocomplete.propTypes = {
  getSuggestionValue: _propTypes["default"].func,
  suggestions: _propTypes["default"].array,
  shouldRenderSuggestions: _propTypes["default"].func,
  alwaysRenderSuggestions: _propTypes["default"].bool,
  highlightFirstSuggestion: _propTypes["default"].bool,
  focusInputOnSuggestionClick: _propTypes["default"].bool,
  multiSection: _propTypes["default"].bool,
  getSectionSuggestions: _propTypes["default"].bool,
  renderItem: _propTypes["default"].func.isRequired,
  passQeury: _propTypes["default"].bool
};
CustomAutocomplete.defaultProps = {
  getSuggestionValue: function getSuggestionValue(item) {
    return item;
  },
  suggestions: [],
  shouldRenderSuggestions: function shouldRenderSuggestions(value) {
    return !!value;
  },
  passQeury: false
};