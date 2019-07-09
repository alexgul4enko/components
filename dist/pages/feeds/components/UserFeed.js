"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _get = _interopRequireDefault(require("lodash/get"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(_ref) {
  var _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user,
      username = _ref.username;

  if ((0, _isEmpty["default"])(user)) {
    return null;
  }

  var _ref2 = user || {},
      firstname = _ref2.firstname,
      surname = _ref2.surname,
      job_roles = _ref2.job_roles,
      teams = _ref2.teams,
      locations = _ref2.locations,
      user_avatar = _ref2.user_avatar;

  return React.createElement("div", {
    className: "user_feed feed_content"
  }, React.createElement("div", {
    className: "feed_user_avatar",
    style: user_avatar ? {
      backgroundImage: "url(".concat(user_avatar, ")")
    } : undefined
  }), React.createElement("div", {
    className: "user_content"
  }, React.createElement("h4", null, firstname || surname ? "".concat(firstname, " ").concat(surname) : username || 'Deleted User'), React.createElement("p", null, (0, _get["default"])(job_roles, '[0].name')), React.createElement("p", null, (0, _get["default"])(teams, '[0].name')), React.createElement("p", null, (0, _get["default"])(locations, '[0].name'))));
}