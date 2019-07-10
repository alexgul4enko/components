"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigate = navigate;
exports.epic = epic;

var _connectedReactRouter = require("connected-react-router");

var _queryParams = require("./queryParams");

var _of = require("rxjs/observable/of");

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WITH_NAVIGATION = 'WITH_NAVIGATION';

function navigate(payload) {
  return {
    type: WITH_NAVIGATION,
    payload: payload
  };
}

function epic(action$, store, _ref) {
  var API = _ref.API;
  // FIXME API
  return action$.ofType(WITH_NAVIGATION).mergeMap(function (_ref2) {
    var payload = _ref2.payload;
    var path = (0, _get["default"])(store.getState(), 'router.location.pathname');
    return (0, _of.of)((0, _connectedReactRouter.push)("".concat(path, "?").concat((0, _queryParams.buildQueryParams)(payload))));
  });
}