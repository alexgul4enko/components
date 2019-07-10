"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationCard;

var _ago = _interopRequireDefault(require("../../utils/ago"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NotificationCard(_ref) {
  var data = _ref.data,
      timestamp = _ref.timestamp,
      onClick = _ref.onClick;

  var _ref2 = data || {},
      image = _ref2.image,
      body = _ref2.body,
      status = _ref2.status,
      title = _ref2.title,
      link = _ref2.link;

  return React.createElement("a", {
    className: "notification",
    onClick: onClick(data),
    target: "_blank",
    href: link
  }, React.createElement("div", {
    className: "notification_user_avatar",
    style: image ? {
      backgroundImage: "url(".concat(image, ")")
    } : undefined
  }), React.createElement("div", {
    className: "notification_data"
  }, React.createElement("h1", {
    className: "notification_title"
  }, title || 'Deleted User', React.createElement("span", null, (0, _ago["default"])(timestamp))), React.createElement("p", {
    className: "notification_desc ".concat(status ? 'active' : '')
  }, body)));
}