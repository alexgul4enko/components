"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withTables;

var _react = require("react");

var _get = _interopRequireDefault(require("lodash/get"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _reactSortableHoc = require("react-sortable-hoc");

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

function withTables(TableComponent) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_Component) {
    _inherits(_temp, _Component);

    function _temp(props) {
      var _this;

      _classCallCheck(this, _temp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_temp).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "handleSelectAllChange", function (event, checked) {
        var selected = checked ? _this.props.data.map(function (item) {
          return _this.props.keyExtractor(item);
        }) : [];
        _this.props.onSelectChange && _this.props.onSelectChange(selected);

        _this.setState({
          selected: selected
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleSelectClick", function (row) {
        return function (event, checked) {
          var id = _this.props.keyExtractor(row);

          var selected = checked ? _this.state.selected.concat([id]) : _this.state.selected.filter(function (item) {
            return item !== id;
          });
          _this.props.onSelectChange && _this.props.onSelectChange(selected);

          _this.setState({
            selected: selected
          });
        };
      });

      _defineProperty(_assertThisInitialized(_this), "checkSelected", function (row) {
        return _this.state.selected.findIndex(function (item) {
          return item === _this.props.keyExtractor(row);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "headerCheckBoxValue", function () {
        if ((0, _isEmpty["default"])(_this.state.selected) || (0, _isEmpty["default"])(_this.props.data)) {
          return -1;
        }

        if (_this.state.selected.length < _this.props.data.length) {
          return 0;
        }

        return 1;
      });

      _defineProperty(_assertThisInitialized(_this), "handleChangePage", function (event, page) {
        _this.props.fetch(_objectSpread({}, _this.props.filters, {
          offset: page * _this.props.filters.limit
        }));

        _this.setState({
          selected: []
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleChangelimit", function (event) {
        var limit = event.target.value;

        _this.props.fetch(_objectSpread({}, _this.props.filters, {
          limit: limit,
          offset: 0
        }));

        _this.setState({
          selected: []
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleSort", function (orderBy) {
        return function () {
          var fetchFilters = orderBy !== (0, _get["default"])(_this.props, 'filters.sort', null) ? {
            sort: orderBy,
            order: 'desc'
          } : (0, _get["default"])(_this.props, 'filters.order') === 'desc' ? {
            sort: orderBy,
            order: 'asc'
          } : {
            sort: undefined,
            order: undefined
          };

          _this.props.fetch(_objectSpread({}, _this.props.filters, {}, fetchFilters));

          _this.setState({
            selected: []
          });
        };
      });

      _defineProperty(_assertThisInitialized(_this), "handleSearch", function (fulltext_search) {
        if ((0, _get["default"])(_this.props, 'filters.fulltext_search') === fulltext_search) {
          return;
        }

        _this.props.fetch(_objectSpread({}, _this.props.filters, {
          offset: 0,
          fulltext_search: fulltext_search
        }));

        _this.setState({
          selected: []
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onDragEnd", function (_ref) {
        var oldIndex = _ref.oldIndex,
            newIndex = _ref.newIndex;

        _this.props.setData({
          count: _this.props.count,
          results: (0, _reactSortableHoc.arrayMove)(_this.props.data, oldIndex, newIndex)
        }); // const nextIndex = get(this.props, `data[${newIndex}].order`)
        // const item = get(this.props, `data[${oldIndex}]`)
        // TODO: make integration with BE
        // this.props.update({...item,row}, {endpoint: 'locations/:uuid'})
        // this.props.fetch(this.props.filters)

      });

      _this.state = {
        selected: []
      };
      return _this;
    }

    _createClass(_temp, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return (0, _get["default"])(this.props, 'data') !== (0, _get["default"])(nextProps, 'data') || this.state.selected !== nextState.selected;
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(TableComponent, _extends({}, this.props, this.state, {
          handleSelectAllChange: this.handleSelectAllChange,
          handleSelectClick: this.handleSelectClick,
          checkSelected: this.checkSelected,
          headerCheckBoxValue: this.headerCheckBoxValue,
          handleChangePage: this.handleChangePage,
          handleChangelimit: this.handleChangelimit,
          handleSort: this.handleSort,
          handleSearch: this.handleSearch,
          onDragEnd: this.onDragEnd
        }));
      }
    }]);

    return _temp;
  }(_react.Component), _temp;
}