"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoginScreen;

var _Icon = _interopRequireDefault(require("../../widgets/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function LoginScreen(_ref) {
  var handleAnimationEnd = _ref.handleAnimationEnd;
  return React.createElement("div", {
    className: "cognito_login"
  }, React.createElement("h1", {
    className: "redirect_info zoomIn",
    onAnimationEnd: handleAnimationEnd
  }, "We will redirect to Cognoto authorization size"), React.createElement("div", {
    className: "redirect_to_cognito"
  }, React.createElement("div", {
    className: "small_logo zoomIn"
  }), React.createElement("div", {
    className: "to"
  }, React.createElement("div", null, React.createElement(_Icon["default"], {
    name: "arrow_forward_ios",
    color: "#fff",
    size: 24,
    className: "look_at_this infinity_animations"
  }), React.createElement("div", {
    className: "cognito_logo"
  })))));
}