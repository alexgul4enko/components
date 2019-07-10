"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _resource = _interopRequireDefault(require("../../../utils/resource"));

var _FeadItemHeader = _interopRequireDefault(require("./FeadItemHeader"));

var _PostFeed = _interopRequireDefault(require("./PostFeed"));

var _UserFeed = _interopRequireDefault(require("./UserFeed"));

var _CommentFeed = _interopRequireDefault(require("./CommentFeed"));

var _feedsActions = require("../feedsActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FeedItem =
/*#__PURE__*/
function (_Component) {
  _inherits(FeedItem, _Component);

  function FeedItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FeedItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FeedItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderItem", function () {
      switch (_this.props.data.entity_type) {
        case 'node':
          return React.createElement(_PostFeed["default"], {
            uuid: _this.props.data.entity_uuid,
            handleLike: _this.handleLike
          });

        case 'comment':
          return React.createElement(_CommentFeed["default"], _extends({}, _this.props.data, {
            handleLike: _this.handleLike
          }));

        case 'user':
          return React.createElement(_UserFeed["default"], _this.props.data);

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLike", function (uuid, entity_uuid, isLiked, isParent) {
      return function () {
        var method = isLiked ? 'remove' : 'replace';
        return _this.props.like[method]({
          uuid: uuid
        }).then(function () {
          return _this.props.like.fetch({
            uuid: uuid
          }, {
            endpoint: 'posts/:uuid'
          });
        }).then(function (post) {
          _this.props.like.setData(_defineProperty({}, uuid, _objectSpread({}, !isParent ? _this.props.data : {}, {}, post, {
            isLiked: !isLiked
          })), {
            namespace: 'posts',
            dataFunction: 'object'
          });

          return post;
        });
      };
    });

    return _this;
  }

  _createClass(FeedItem, [{
    key: "render",
    value: function render() {
      return React.createElement("a", {
        className: "post_item",
        href: this.props.data.link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, React.createElement(_FeadItemHeader["default"], this.props.data), this.renderItem());
    }
  }]);

  return FeedItem;
}(_react.Component);

var _default = (0, _resource["default"])([{
  namespace: 'like',
  endpoint: 'posts/:uuid/like',
  forceUpdates: true,
  dataFunction: 'none'
}])(FeedItem);

exports["default"] = _default;