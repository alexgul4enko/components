"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CommentFeed;

var _moment = _interopRequireDefault(require("moment"));

var _get = _interopRequireDefault(require("lodash/get"));

var _widgets = require("../../../widgets");

var _PostFeed = _interopRequireDefault(require("./PostFeed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CommentFeed(_ref) {
  var username = _ref.username,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user,
      timestamp = _ref.timestamp,
      description = _ref.description,
      handleLike = _ref.handleLike,
      entity_uuid = _ref.entity_uuid,
      thread_uuid = _ref.thread_uuid;

  var _ref2 = user || {},
      firstname = _ref2.firstname,
      surname = _ref2.surname,
      job_roles = _ref2.job_roles,
      teams = _ref2.teams,
      locations = _ref2.locations,
      user_avatar = _ref2.user_avatar;

  return React.createElement("div", {
    className: "post_comment_card"
  }, React.createElement(_PostFeed["default"], {
    uuid: thread_uuid,
    handleLike: handleLike,
    entity_uuid: entity_uuid,
    isParent: true
  }), React.createElement("div", {
    className: "post_comment_card_wrapper"
  }, React.createElement("div", {
    className: "post_comment"
  }, React.createElement("div", {
    className: "post_comment_user"
  }, React.createElement("div", {
    className: "feed_user_avatar",
    style: user_avatar ? {
      backgroundImage: "url(".concat(user_avatar, ")")
    } : undefined
  }), React.createElement("div", {
    className: "user_content"
  }, React.createElement("h4", null, firstname || surname ? "".concat(firstname, " ").concat(surname) : username || 'Deleted User'), React.createElement("p", null, (0, _moment["default"])(timestamp * 1000).format('DD MMM YYYY-HH:mm')))), React.createElement("div", {
    className: "post_content"
  }, React.createElement(_widgets.Truncate, {
    lines: 3
  }, React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: (0, _get["default"])(description, '[0]', description)
    }
  })), React.createElement("span", {
    className: "read_more"
  }, "Read more")))));
}