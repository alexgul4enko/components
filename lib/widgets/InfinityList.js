"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _reactVirtualized = require("react-virtualized");

var _get = _interopRequireDefault(require("lodash/get"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _Icon = _interopRequireDefault(require("./Icon"));

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

var InfinityList =
/*#__PURE__*/
function (_Component) {
  _inherits(InfinityList, _Component);

  function InfinityList(props) {
    var _this;

    _classCallCheck(this, InfinityList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfinityList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getListItem", function (index) {
      return (0, _get["default"])(_this.props, "data[".concat(index, "]"));
    });

    _defineProperty(_assertThisInitialized(_this), "recalculateHeight", function (index) {
      _this.cache.clearAll();

      _this._list && _this._list.recomputeRowHeights();
    });

    _defineProperty(_assertThisInitialized(_this), "getRowHeight", function (_ref) {
      var index = _ref.index;
      return _this.getListItem(index).size;
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;

      if (clientHeight + scrollTop - scrollHeight >= -30) {
        _this.props.onScrollEnd && _this.props.onScrollEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderRow", function (_ref3) {
      var index = _ref3.index,
          isScrolling = _ref3.isScrolling,
          key = _ref3.key,
          parent = _ref3.parent,
          style = _ref3.style;
      var _this$props = _this.props,
          RowElement = _this$props.RowElement,
          useDynamicRowHeight = _this$props.useDynamicRowHeight,
          data = _this$props.data,
          count = _this$props.count;
      return React.createElement(_reactVirtualized.CellMeasurer, {
        cache: _this.cache,
        columnIndex: 0,
        key: key,
        parent: parent,
        rowIndex: index
      }, React.createElement("div", {
        className: 'feeds-list-item',
        style: style
      }, index === data.length && index !== count - 1 ? React.createElement("div", {
        className: "list_footer"
      }, React.createElement("div", null, React.createElement(_CircularProgress["default"], {
        size: 24,
        color: "primary"
      }))) : React.createElement(RowElement, {
        data: _this.getListItem(index)
      })));
    });

    _this.cache = new _reactVirtualized.CellMeasurerCache({
      defaultHeight: 60,
      fixedWidth: true
    });
    return _this;
  }

  _createClass(InfinityList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.data !== prevProps.data) {
        this.recalculateHeight();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          listRowHeight = _this$props2.listRowHeight,
          useDynamicRowHeight = _this$props2.useDynamicRowHeight,
          showLoadMore = _this$props2.showLoadMore,
          emptyText = _this$props2.emptyText,
          emptyIcon = _this$props2.emptyIcon;

      if ((0, _isEmpty["default"])(data)) {
        return React.createElement(EmptyList, {
          emptyText: emptyText,
          emptyIcon: emptyIcon
        });
      }

      return React.createElement(_reactVirtualized.AutoSizer, null, function (_ref4) {
        var width = _ref4.width,
            height = _ref4.height;
        return React.createElement(_reactVirtualized.List, {
          ref: function ref(_ref5) {
            return _this2._list = _ref5;
          },
          className: "infinityList",
          height: height,
          overscanRowCount: 2,
          rowCount: data.length + (showLoadMore ? 1 : 0),
          deferredMeasurementCache: _this2.cache,
          rowHeight: _this2.cache.rowHeight,
          rowRenderer: _this2.renderRow,
          width: width,
          onScroll: _this2.handleScroll
        });
      });
    }
  }]);

  return InfinityList;
}(_react.Component);

exports["default"] = InfinityList;

function EmptyList(_ref6) {
  var emptyIcon = _ref6.emptyIcon,
      _ref6$emptyText = _ref6.emptyText,
      emptyText = _ref6$emptyText === void 0 ? 'Nothing to show...' : _ref6$emptyText;
  return React.createElement("div", {
    className: "empty_list_data"
  }, React.createElement("div", {
    className: "empty_list_data_content"
  }, emptyIcon && React.createElement(_Icon["default"], {
    name: emptyIcon
  }), emptyText));
}