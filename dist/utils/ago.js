"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = difference;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function difference(timestamp) {
  var diff = _moment["default"].duration(new Date() - timestamp * 1000);

  return Math.floor(diff.asYears()) && "".concat(Math.floor(diff.asYears()), "y") || Math.floor(diff.asMonths()) && "".concat(Math.floor(diff.asMonths()), "mon") || Math.floor(diff.asWeeks()) && "".concat(Math.floor(diff.asWeeks()), "w") || Math.floor(diff.asDays()) && "".concat(Math.floor(diff.asDays()), "d") || Math.floor(diff.asHours()) && "".concat(Math.floor(diff.asHours()), "h") || Math.floor(diff.asMinutes()) && "".concat(Math.floor(diff.asMinutes()), "min") || Math.floor(diff.asSeconds()) && "".concat(Math.floor(diff.asSeconds()), "s") || 'now';
}