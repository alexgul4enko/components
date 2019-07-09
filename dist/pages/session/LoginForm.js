"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Login;

var _forms = require("../../forms");

var _widgets = require("../../widgets");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Login(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;
  return React.createElement("div", {
    className: "session-layout"
  }, React.createElement("form", {
    className: "auth-form singin",
    onSubmit: handleSubmit
  }, React.createElement(_widgets.AppLogo, null), React.createElement("h2", null, "Member sign in"), React.createElement("div", {
    className: "form-controls"
  }, React.createElement(_forms.TextField, {
    name: "username",
    type: "text",
    placeholder: "Enter your username or email address",
    label: "Username or email address",
    fullWidth: true
  }), React.createElement(_forms.TextField, {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    fullWidth: true
  }), React.createElement(_widgets.LoadingButton, {
    type: "submit",
    color: "primary",
    variant: "contained",
    className: "arrow_button",
    disabled: submitting,
    loading: submitting
  }, React.createElement("span", null, "Continue"), React.createElement(_widgets.Icon, {
    name: "arrow_right_alt"
  })), (process.env.AUTHORIZATIONS_FLOWS || '').includes('cognito') && React.createElement(_Button["default"], {
    type: "button",
    component: "a",
    target: "_blank",
    color: "primary",
    variant: "contained",
    href: "".concat(process.env.COGNITO_URL, "/login?client_id=").concat(process.env.COGNITO_CLIENT_ID, "&response_type=").concat(process.env.COGNITO_RESPONSE_TYPE, "&redirect_uri=").concat(window.location.origin, "/auth/token&scope=").concat(process.env.COGNITO_SCOPE),
    className: "arrow_button loading_button"
  }, "Log in via Cognito", React.createElement(_widgets.Icon, {
    name: "arrow_right_alt"
  })))));
}