"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _get = _interopRequireDefault(require("lodash/get"));

var _moment = _interopRequireDefault(require("moment"));

var _widgets = require("../../../widgets");

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

var _theme = require("../../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PostFeed(_ref) {
  var user = _ref.user,
      timestamp = _ref.timestamp,
      category = _ref.category,
      category_colour = _ref.category_colour,
      description = _ref.description,
      attachments = _ref.attachments,
      isLiked = _ref.isLiked,
      likes_count = _ref.likes_count,
      comment_count = _ref.comment_count,
      username = _ref.username,
      handleLike = _ref.handleLike,
      branding = _ref.branding,
      entity_uuid = _ref.entity_uuid,
      uuid = _ref.uuid,
      isParent = _ref.isParent;

  var _ref2 = user || {},
      firstname = _ref2.firstname,
      surname = _ref2.surname,
      job_roles = _ref2.job_roles,
      teams = _ref2.teams,
      locations = _ref2.locations,
      user_avatar = _ref2.user_avatar;

  var categoryName = (0, _get["default"])(category, 'name', category);
  var categoryColour = (0, _get["default"])(category, 'category_colour', category);
  var uri = (0, _get["default"])(attachments, '[0].file_download');
  var color = isLiked ? (0, _get["default"])(branding, 'link_colour', '#005EA5') : '#656565';
  return React.createElement("div", {
    className: "post-feed-card"
  }, React.createElement("div", {
    className: "user_feed feed_content"
  }, React.createElement("div", {
    className: "feed_user_avatar",
    style: user_avatar ? {
      backgroundImage: "url(".concat(user_avatar, ")")
    } : undefined
  }), React.createElement("div", {
    className: "user_content"
  }, React.createElement("h4", null, firstname || surname ? "".concat(firstname, " ").concat(surname) : username || 'Deleted User'), React.createElement("p", null, (0, _moment["default"])(timestamp * 1000).format('DD MMM YYYY-HH:mm')), React.createElement("div", {
    className: "feed_category"
  }, React.createElement(_widgets.Icon, {
    name: "label",
    color: categoryColour,
    size: 20
  }), React.createElement("span", null, categoryName)))), React.createElement("div", {
    className: "post_content"
  }, React.createElement(_widgets.Truncate, {
    lines: 3
  }, React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: description
    }
  })), React.createElement("span", {
    className: "read_more"
  }, "Read more")), uri && React.createElement("div", {
    style: {
      backgroundImage: "url(".concat(uri, ")")
    },
    className: "featured_image"
  }), React.createElement("div", {
    className: "feed_buttons"
  }, React.createElement(_ActionButton["default"], {
    onClick: handleLike(uuid, entity_uuid, isLiked, isParent),
    name: isLiked ? 'thumb_up_alt' : 'thumb_up_off_alt',
    color: color,
    info: likes_count
  }), React.createElement(_ActionButton["default"], {
    onClick: handleLike(uuid, entity_uuid, isLiked, isParent),
    name: "chat_bubble",
    info: comment_count,
    disabled: true
  })));
}

var _default = (0, _redux.compose)(_theme.withStyles, (0, _reactRedux.connect)(function (_ref3, _ref4) {
  var posts = _ref3.posts;
  var uuid = _ref4.uuid;
  return _objectSpread({}, (0, _get["default"])(posts, "data[".concat(uuid, "]"), {}));
}))(PostFeed);

exports["default"] = _default;