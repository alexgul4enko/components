"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HtmlView;

var _react = require("react");

function HtmlView(_ref) {
  var body = _ref.body,
      elements = _ref.elements,
      activeIndex = _ref.activeIndex,
      scrollTo = _ref.scrollTo;
  return React.createElement(_react.Fragment, null, React.createElement("div", {
    className: "manual_body",
    dangerouslySetInnerHTML: {
      __html: body
    }
  }), React.createElement("aside", {
    className: "navigation"
  }, React.createElement("h4", null, "Contents"), React.createElement("ul", null, elements.map(function (_ref2, index) {
    var top = _ref2.top,
        text = _ref2.text,
        item = _ref2.item;
    return React.createElement("li", {
      onClick: scrollTo(item),
      className: activeIndex === index ? 'active' : '',
      key: "".concat(text).concat(index)
    }, text);
  }))));
}