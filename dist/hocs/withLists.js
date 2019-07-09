"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ListsHOC;

var _react = require("react");

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _get = _interopRequireDefault(require("lodash/get"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _Loading = _interopRequireDefault(require("../widgets/Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function filterData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if ((0, _isEmpty["default"])(data)) {
    return [];
  }

  if (!filter) {
    return data;
  }

  return data.filter(function (_ref) {
    var name = _ref.name;
    return name.toLowerCase().includes(filter.toLowerCase());
  });
}

var cachedFiler = (0, _memoizeOne["default"])(filterData);

function ListsHOC(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(withListData, _Component);

    function withListData() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, withListData);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(withListData)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "loadNext", function () {
        if ((0, _isEmpty["default"])(_this.props.data) || _this.props.isLoading) {
          return;
        }

        var _ref2 = _this.props.data || {},
            count = _ref2.count,
            results = _ref2.results;

        if (_this.props.usePages || _this.props.useLimit) {
          if (results.length >= count || _this.props.isLoading) {
            return;
          }

          var _ref3 = _this.props.filters || {},
              page = _ref3.page,
              offset = _ref3.offset,
              limit = _ref3.limit;

          if (_this.props.usePages) {
            return _this.props.fetch(_objectSpread({}, _this.props.filters, {
              page: page + 1
            }, _this.props.apiParams));
          }

          if (_this.props.useLimit) {
            return _this.props.fetch(_objectSpread({}, _this.props.filters, {
              offset: offset + limit,
              limit: 25
            }, _this.props.apiParams));
          }
        }
      });

      _defineProperty(_assertThisInitialized(_this), "getInitialData", function () {
        if (_this.props.usePages) {
          return _this.props.fetch(_objectSpread({}, _this.props.filters, {
            page: 0
          }, _this.props.apiParams), {
            dataFunction: 'replace'
          });
        }

        if (_this.props.useLimit) {
          return _this.props.fetch(_objectSpread({}, _this.props.filters, {
            offset: 0,
            limit: 25
          }, _this.props.apiParams), {
            dataFunction: 'replace'
          });
        }

        return _this.props.fetch(_objectSpread({}, _this.props.filters, {}, _this.props.apiParams), {
          dataFunction: 'replace'
        });
      });

      _defineProperty(_assertThisInitialized(_this), "addFilter", function (filter) {
        if (_this.props.usePages) {
          return _this.props.fetch(_objectSpread({}, _this.props.filters, {
            page: 0
          }, _this.props.apiParams, {}, filter), {
            dataFunction: 'replace'
          });
        }

        if (_this.props.useLimit) {
          return _this.props.fetch(_objectSpread({}, _this.props.filters, {
            offset: 0,
            limit: 25
          }, _this.props.apiParams, {}, filter), {
            dataFunction: 'replace'
          });
        }

        return _this.props.fetch(_objectSpread({}, _this.props.filters, {}, _this.props.apiParams, {}, filter), {
          dataFunction: 'replace'
        });
      });

      return _this;
    }

    _createClass(withListData, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.getInitialData();
      }
    }, {
      key: "render",
      value: function render() {
        var isLoading = (0, _isEmpty["default"])((0, _get["default"])(this.props, 'data.results')) && this.props.isLoading;
        var footerExtraClass = !(0, _isEmpty["default"])((0, _get["default"])(this.props, 'data.results')) && this.props.isLoading;
        return React.createElement(_Loading["default"], {
          isLoading: isLoading
        }, React.createElement(WrappedComponent, _extends({}, this.props, {
          loadNext: this.loadNext,
          initialLoading: this.props.isLoading && (0, _isEmpty["default"])((0, _get["default"])(this.props.data, 'results', [])),
          addFilter: this.addFilter,
          cachedFiler: cachedFiler,
          showLoadMore: footerExtraClass
        })));
      }
    }]);

    return withListData;
  }(_react.Component), _defineProperty(_class, "defaulProps", {
    apiParams: {},
    filters: {},
    showLoading: true
  }), _temp;
}