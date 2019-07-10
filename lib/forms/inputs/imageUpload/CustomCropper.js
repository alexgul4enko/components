"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactCropper = _interopRequireDefault(require("react-cropper"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomCropper =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomCropper, _Component);

  function CustomCropper(props) {
    var _this;

    _classCallCheck(this, CustomCropper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomCropper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      _this.cropper.cropper.clear();

      _this.preview.src = _this.cropper.getCroppedCanvas().toDataURL();
    });

    _defineProperty(_assertThisInitialized(_this), "crop", function () {
      _this.cropper.cropper.crop();

      _this.preview.src = _this.cropper.getCroppedCanvas().toDataURL();
    });

    _defineProperty(_assertThisInitialized(_this), "closeAndSave", function () {
      var imageData = _this.cropper.getImageData();

      var data = _this.cropper.getData();

      if (data.height === 0) {
        cropStyles.height = imageData.naturalHeight;
      }

      if (data.width === 0) {
        cropStyles.width = imageData.naturalWidth;
      }

      _this.props.onChange(data);
    });

    _this.onCrop = (0, _debounce["default"])(_this.handleCrop.bind(_assertThisInitialized(_this)), 300);
    return _this;
  }

  _createClass(CustomCropper, [{
    key: "handleCrop",
    value: function handleCrop() {
      this.preview.src = this.cropper.getCroppedCanvas().toDataURL();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Header = _this$props.constrols,
          value = _this$props.value,
          data = _this$props.data;
      return React.createElement("div", {
        className: "custom_cropper"
      }, React.createElement(Header, {
        value: value,
        clear: this.clear,
        crop: this.crop,
        closeAndSave: this.closeAndSave
      }), React.createElement("div", {
        className: "cropper"
      }, React.createElement("aside", null, React.createElement("p", null, "Original image"), React.createElement("img", {
        className: "crop-image-original",
        src: value
      }), React.createElement("p", null, "Croped image"), React.createElement("img", {
        className: "custom_cropper_preview",
        ref: function ref(_ref) {
          return _this2.preview = _ref;
        }
      })), React.createElement(_reactCropper["default"], {
        ref: function ref(_ref2) {
          return _this2.cropper = _ref2;
        },
        src: value,
        crop: this.onCrop,
        zoomable: false,
        scalable: false,
        viewMode: 2,
        data: data
      })));
    }
  }]);

  return CustomCropper;
}(_react.Component);

exports["default"] = CustomCropper;