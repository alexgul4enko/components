"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hocs = require("../../hocs");

var _widgets = require("../../widgets");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _get = _interopRequireDefault(require("lodash/get"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _NotificationCard = _interopRequireDefault(require("./NotificationCard"));

var _ClearAll = _interopRequireDefault(require("./ClearAll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Notifications(_ref) {
  var data = _ref.data,
      handleNotificationClick = _ref.handleNotificationClick,
      clearAll = _ref.clearAll,
      loadNext = _ref.loadNext,
      showLoadMore = _ref.showLoadMore;
  return React.createElement("div", {
    className: "notifications_container"
  }, React.createElement(_ClearAll["default"], {
    disabled: (0, _isEmpty["default"])((0, _get["default"])(data, 'results', [])),
    clearAll: clearAll
  }), React.createElement("div", {
    className: "notifications_list"
  }, React.createElement(_widgets.InfinityList, {
    data: (0, _get["default"])(data, 'results', []),
    count: (0, _get["default"])(data, 'count', 0),
    useDynamicRowHeight: true,
    RowElement: function RowElement(props) {
      return React.createElement(_NotificationCard["default"], _extends({}, props, {
        onClick: handleNotificationClick
      }));
    },
    emptyText: "No new notifications",
    emptyIcon: "bell",
    onScrollEnd: loadNext,
    showLoadMore: showLoadMore
  })));
}

var _default = (0, _hocs.withLists)(Notifications);

exports["default"] = _default;