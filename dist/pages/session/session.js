"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithCognoto = loginWithCognoto;
exports.cognitoEpic = cognitoEpic;
exports["default"] = cognitoHOC;
exports.COGNITO_LOGIN = void 0;

var _fromPromise = require("rxjs/observable/fromPromise");

var _of = require("rxjs/observable/of");

var _reactRedux = require("react-redux");

var _resource = require("../../utils/resource");

var COGNITO_LOGIN = 'COGNITO_LOGIN';
exports.COGNITO_LOGIN = COGNITO_LOGIN;

function loginWithCognoto() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      resolve = _ref.resolve,
      reject = _ref.reject;

  return {
    type: COGNITO_LOGIN,
    payload: payload,
    meta: {
      resolve: resolve,
      reject: reject
    }
  };
}

function loginWithCognito(code) {
  return fetch("".concat(process.env.COGNITO_URL, "/oauth2/token"), {
    method: 'POST',
    body: ['grant_type=authorization_code', 'code=' + encodeURIComponent(code), 'client_id=' + encodeURIComponent(process.env.COGNITO_CLIENT_ID), 'redirect_uri=' + encodeURIComponent("".concat(window.location.origin, "/auth/token"))].join('&'),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(function (res) {
    if (!res.ok) {
      throw new Error('token is invalid');
    }

    return res.json();
  });
}

function cognitoEpic(action$, store) {
  return action$.ofType(COGNITO_LOGIN).mergeMap(function (_ref2) {
    var _ref2$payload = _ref2.payload,
        payload = _ref2$payload === void 0 ? {} : _ref2$payload,
        meta = _ref2.meta;
    return (0, _fromPromise.fromPromise)(loginWithCognito(payload)).switchMap(function (response) {
      meta.resolve(response);
      return (0, _of.of)((0, _resource.setData)(response, {
        namespace: 'session'
      }));
    })["catch"](function (err) {
      meta.reject(err.message);
      return (0, _of.of)((0, _resource.setErrors)(err.message, {
        namespace: 'session'
      }));
    });
  });
}

function cognitoHOC(Component) {
  return (0, _reactRedux.connect)(function (_ref3) {
    var session = _ref3.session;
    return {
      session: session
    };
  }, function (dispatch) {
    return {
      login: function login(payload) {
        return new Promise(function (resolve, reject) {
          dispatch(loginWithCognoto(payload, {
            resolve: resolve,
            reject: reject
          }));
        });
      }
    };
  })(Component);
}

function makePromiseActions(dispatch) {
  return new Promise();
}