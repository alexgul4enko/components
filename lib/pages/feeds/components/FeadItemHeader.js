"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FeadItemHeader;

var _ago = _interopRequireDefault(require("../../../utils/ago"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function FeadItemHeader(_ref) {
  var name = _ref.username,
      short_text = _ref.short_text,
      group_name = _ref.group_name,
      timestamp = _ref.timestamp,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user;

  var _ref2 = user || {},
      firstname = _ref2.firstname,
      surname = _ref2.surname;

  var username = firstname || surname ? "".concat(firstname, " ").concat(surname) : name || 'Deleted User';
  return React.createElement("div", {
    className: "feed-item-header"
  }, React.createElement("h1", {
    className: "feed-item-header-title"
  }, username, " ", React.createElement("span", null, (0, _ago["default"])(timestamp))), React.createElement("p", {
    className: "feed-item-header-description"
  }, short_text), React.createElement("p", {
    className: "feed-item-header-group"
  }, group_name));
}