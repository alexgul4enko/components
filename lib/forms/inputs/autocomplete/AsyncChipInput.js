"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _async = _interopRequireDefault(require("react-select/async"));

var _NoResults = _interopRequireDefault(require("./NoResults"));

var _Control = _interopRequireDefault(require("./Control"));

var _Placeholder = _interopRequireDefault(require("./Placeholder"));

var _OptionComponent = _interopRequireDefault(require("./OptionComponent"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _ValueContainer = _interopRequireDefault(require("./ValueContainer"));

var _SelectContainer = _interopRequireDefault(require("./SelectContainer"));

var _SingleValue = _interopRequireDefault(require("./SingleValue"));

var _MultiValue = _interopRequireDefault(require("./MultiValue"));

var _ClearIndicator = _interopRequireDefault(require("./ClearIndicator"));

var _DropdownIndicator = _interopRequireDefault(require("./DropdownIndicator"));

var _noOptionsMessage = _interopRequireDefault(require("./noOptionsMessage"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _get = _interopRequireDefault(require("lodash/get"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _resource = _interopRequireDefault(require("../../../utils/resource"));

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

var components = {
  Control: _Control["default"],
  Menu: _Menu["default"],
  MultiValue: _MultiValue["default"],
  NoOptionsMessage: _NoResults["default"],
  Option: _OptionComponent["default"],
  Placeholder: _Placeholder["default"],
  SingleValue: _SingleValue["default"],
  ValueContainer: _ValueContainer["default"],
  SelectContainer: _SelectContainer["default"],
  ClearIndicator: _ClearIndicator["default"],
  DropdownIndicator: _DropdownIndicator["default"]
};

var AsyncChipInput =
/*#__PURE__*/
function (_Component) {
  _inherits(AsyncChipInput, _Component);

  function AsyncChipInput(props) {
    var _this;

    _classCallCheck(this, AsyncChipInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AsyncChipInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value, _ref) {
      var action = _ref.action;
      return _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "fetch", function (text, resolve) {
      var _this$props = _this.props,
          endpoint = _this$props.endpoint,
          onLoadOptions = _this$props.onLoadOptions,
          queries = _this$props.queries,
          makeQueries = _this$props.makeQueries;

      if (!text) {
        return resolve([]);
      }

      return _this.props.select.fetch(makeQueries(text), {
        endpoint: endpoint,
        queries: queries
      }).then(function (data) {
        return resolve(onLoadOptions(data));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadOptions", function (text) {
      var _this$props2 = _this.props,
          endpoint = _this$props2.endpoint,
          onLoadOptions = _this$props2.onLoadOptions,
          queries = _this$props2.queries;
      return new Promise(function (resolve, reject) {
        return _this.cacheFetch(text, resolve);
      });
    });

    _this.cacheFetch = (0, _debounce["default"])(_this.fetch, 500);
    return _this;
  }

  _createClass(AsyncChipInput, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          id = _this$props3.id,
          label = _this$props3.label,
          placeholder = _this$props3.placeholder,
          options = _this$props3.options,
          value = _this$props3.value,
          isMulti = _this$props3.isMulti,
          noOptionsMessage = _this$props3.noOptionsMessage,
          required = _this$props3.required,
          getOptionLabel = _this$props3.getOptionLabel,
          getOptionValue = _this$props3.getOptionValue,
          onFocus = _this$props3.onFocus,
          onBlur = _this$props3.onBlur,
          filterOption = _this$props3.filterOption,
          formatOptionLabel = _this$props3.formatOptionLabel;
      return React.createElement(_async["default"], {
        inputId: id,
        TextFieldProps: {
          label: label,
          InputLabelProps: {
            htmlFor: id,
            required: required,
            disabled: disabled,
            focused: !(0, _isEmpty["default"])(value) ? true : undefined,
            shrink: !(0, _isEmpty["default"])(value) ? true : undefined,
            onFocus: onFocus,
            onBlur: onBlur
          }
        },
        placeholder: placeholder,
        options: options,
        components: components,
        value: value,
        onChange: this.handleChange,
        isMulti: isMulti,
        noOptionsMessage: noOptionsMessage,
        getOptionLabel: getOptionLabel,
        getOptionValue: getOptionValue,
        isDisabled: disabled,
        filterOption: filterOption,
        formatOptionLabel: formatOptionLabel,
        loadOptions: this.loadOptions
      });
    }
  }]);

  return AsyncChipInput;
}(_react.Component);

AsyncChipInput.defaultProps = {
  emptyMessage: 'No data',
  placeholder: 'Search...',
  isMulti: false,
  getOptionLabel: function getOptionLabel(item) {
    return (0, _get["default"])(item, 'label');
  },
  getOptionValue: function getOptionValue(item) {
    return (0, _get["default"])(item, 'uuid');
  },
  required: false,
  noOptionsMessage: _noOptionsMessage["default"],
  onLoadOptions: function onLoadOptions(_ref2) {
    var results = _ref2.results;
    return results;
  },
  filterOption: function filterOption(_) {
    return true;
  },
  makeQueries: function makeQueries(text) {
    return {
      fulltext_search: text
    };
  }
};

var _default = (0, _resource["default"])([{
  endpoint: 'temp',
  dataFunction: 'none',
  forceUpdates: true,
  namespace: 'select'
}])(AsyncChipInput);

exports["default"] = _default;