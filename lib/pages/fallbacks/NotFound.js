"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotFound;

var _reactRouterDom = require("react-router-dom");

// TODO make it pretty
function NotFound(props) {
  return React.createElement("main", {
    className: "not_found_page"
  }, React.createElement("h1", null, ".404"), React.createElement("div", null, React.createElement("p", null, "The page you are trying to reach does not exist, or has been moved."), React.createElement(_reactRouterDom.Link, {
    className: "link",
    to: "/"
  }, "Go to homepage")));
}