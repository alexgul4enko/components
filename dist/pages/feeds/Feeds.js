"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hocs = require("../../hocs");

var _widgets = require("../../widgets");

var _get = _interopRequireDefault(require("lodash/get"));

var _components = require("./components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Feeds(_ref) {
  var data = _ref.data,
      loadNext = _ref.loadNext,
      showLoadMore = _ref.showLoadMore;
  return React.createElement(_widgets.InfinityList, {
    data: (0, _get["default"])(data, 'results', []),
    useDynamicRowHeight: true,
    RowElement: _components.FeedItem,
    onScrollEnd: loadNext,
    showLoadMore: showLoadMore,
    emptyText: "There's nothing to show here",
    emptyIcon: "feed"
  });
}

var _default = (0, _hocs.withLists)(Feeds);

exports["default"] = _default;