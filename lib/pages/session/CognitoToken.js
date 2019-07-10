"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CognitoToken;

var _get = _interopRequireDefault(require("lodash/get"));

var _Icon = _interopRequireDefault(require("../../widgets/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CognitoToken(_ref) {
  var handleAnimationEnd = _ref.handleAnimationEnd,
      session = _ref.session;
  return React.createElement("div", {
    className: "cognito_login"
  }, React.createElement("div", {
    className: "big_logo zoomIn",
    onAnimationEnd: handleAnimationEnd
  }), React.createElement("a", {
    href: "".concat(process.env.COGNITO_URL, "/login?client_id=").concat(process.env.COGNITO_CLIENT_ID, "&response_type=").concat(process.env.COGNITO_RESPONSE_TYPE, "&redirect_uri=").concat(window.location.origin, "/auth/token&scope=").concat(process.env.COGNITO_SCOPE),
    className: "login_with_cognito_link ".concat((0, _get["default"])(session, 'errors') ? 'active' : '', " arrow_button")
  }, "Try again", React.createElement(_Icon["default"], {
    name: "arrow_right_alt"
  })));
}