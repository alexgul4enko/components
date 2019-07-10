"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;
exports.feedsEpic = feedsEpic;

var _fromPromise = require("rxjs/observable/fromPromise");

var _of = require("rxjs/observable/of");

var _concat = require("rxjs/observable/concat");

var _resource = require("../../utils/resource");

var _get = _interopRequireDefault(require("lodash/get"));

var _has = _interopRequireDefault(require("lodash/has"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_FEEDS_ACTION = 'GET_FEEDS_ACTION';

function fetch(payload) {
  return {
    type: GET_FEEDS_ACTION,
    meta: {
      namespace: 'feeds',
      endpoint: 'feeds',
      queries: ['page'],
      dataFunction: 'paginationList'
    },
    payload: payload
  };
}

function feedsEpic(action$, store, _ref) {
  var API = _ref.API;
  return action$.ofType(GET_FEEDS_ACTION).mergeMap(function (_ref2) {
    var payload = _ref2.payload,
        meta = _ref2.meta;
    var endpoint = meta.endpoint,
        namespace = meta.namespace,
        _meta$queries = meta.queries,
        queries = _meta$queries === void 0 ? [] : _meta$queries;
    return (0, _concat.concat)((0, _of.of)((0, _resource.setLoading)(true, meta), (0, _resource.setErrors)({}, meta), (0, _resource.setFilters)((0, _pick["default"])(payload, queries), meta)), (0, _fromPromise.fromPromise)(getFeeds(API, payload, queries)).switchMap(function (response) {
      var posts = (0, _get["default"])(response, 'results', []).reduce(function (res, item) {
        var _post = {};
        var _parent_post = {};

        if ((0, _has["default"])(item, 'parent_post.uuid')) {
          _parent_post[(0, _get["default"])(item, 'parent_post.uuid')] = item.parent_post;
        }

        if ((0, _get["default"])(item, 'entity_type') === 'node') {
          _post[(0, _get["default"])(item, 'uuid')] = item;
        }

        return _objectSpread({}, res, {}, _post, {}, _parent_post);
      }, {});
      return (0, _of.of)((0, _resource.setData)(posts, {
        namespace: 'posts'
      }), (0, _resource.setData)(response, meta), (0, _resource.setLoading)(false, meta));
    })["catch"](function (err) {
      return (0, _concat.concat)((0, _of.of)((0, _resource.setErrors)(err.errors || err, meta), (0, _resource.setLoading)(false, meta))).filter(Boolean);
    })).filter(Boolean);
  });
}

function getFeeds(API, payload, queries) {
  return API.run('feeds').request('GET', (0, _pick["default"])(payload, queries)).then(function (_ref3) {
    var count = _ref3.count,
        results = _ref3.results;
    return Promise.all([count].concat(_toConsumableArray(results.filter(function (_ref4) {
      var entity_uuid = _ref4.entity_uuid;
      return !!entity_uuid;
    }).map(function (item) {
      return fetchFeedInfo(API, item);
    }))));
  }).then(function (_ref5) {
    var _ref6 = _toArray(_ref5),
        count = _ref6[0],
        results = _ref6.slice(1);

    return {
      count: count,
      results: results
    };
  })["catch"](function (err) {
    return {};
  });
}

function getGroupInfo(API, uuid) {
  return API.run("groups/".concat(uuid)).request('GET')["catch"](function (err) {
    return {};
  });
}

function getUserInfo(API, uuid) {
  return API.run("users/".concat(uuid)).request('GET')["catch"](function (err) {
    return {};
  });
}

function fetchAllPostInfo(API, uuid) {
  var postdata = {};
  return API.run("posts/".concat(uuid)).request('GET').then(function (_postdata) {
    postdata = _postdata;
    var attachments = _postdata.attachments;
    return Promise.all([API.run("posts/".concat(uuid, "/like")).request('GET'), (0, _isEmpty["default"])(attachments) ? function () {} : API.run("files/".concat(attachments[0])).request('GET'), getGroupInfo(API, _postdata.group_uuid), getUserInfo(API, _postdata.author_uuid)]);
  }).then(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 4),
        status = _ref8[0].status,
        image = _ref8[1],
        group = _ref8[2],
        user = _ref8[3];

    return _objectSpread({}, postdata, {
      isLiked: status,
      image: image,
      group: group,
      user: user
    });
  })["catch"](function (err) {
    return {};
  });
}

function fetchComment(API, uuid) {
  var postdata = {};
  return fetchAllPostInfo(API, uuid).then(function (post) {
    postdata = post;
    return fetchAllPostInfo(API, post.thread_uuid);
  }).then(function (parent_post) {
    return _objectSpread({}, postdata, {
      parent_post: parent_post
    });
  });
}

function fetchFeedInfo(API, item) {
  var entity_uuid = item.entity_uuid,
      entity_type = item.entity_type,
      user_uuid = item.user_uuid;

  switch (entity_type) {
    case 'node':
      return fetchAllPostInfo(API, entity_uuid).then(function (data) {
        return _objectSpread({}, item, {}, data);
      })["catch"](function (err) {
        return item;
      });

    case 'comment':
      return fetchComment(API, entity_uuid).then(function (data) {
        return _objectSpread({}, item, {}, data);
      })["catch"](function (err) {
        return item;
      });

    case 'user':
      return getUserInfo(API, user_uuid).then(function (data) {
        return _objectSpread({}, item, {}, data);
      })["catch"](function (err) {
        return item;
      });
  }
}