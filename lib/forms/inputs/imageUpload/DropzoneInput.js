"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _Icon = _interopRequireDefault(require("../../../widgets/Icon"));

var _withModal = _interopRequireDefault(require("../../../hocs/withModal"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Grow = _interopRequireDefault(require("../../../widgets/Grow"));

var _has = _interopRequireDefault(require("lodash/has"));

var _get = _interopRequireDefault(require("lodash/get"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _CustomCropper = _interopRequireDefault(require("./CustomCropper"));

var _HeaderControls = _interopRequireDefault(require("./HeaderControls"));

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

var DropzoneInput =
/*#__PURE__*/
function (_Component) {
  _inherits(DropzoneInput, _Component);

  function DropzoneInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropzoneInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropzoneInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onDrop", function (files) {
      var reader = new FileReader();

      reader.onloadend = function () {
        _this.props.onChange({
          file: reader.result
        });
      };

      reader.readAsDataURL(files[0]);
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.props.onChange(null);
    });

    _defineProperty(_assertThisInitialized(_this), "renderInput", function () {
      return React.createElement(_reactDropzone["default"], {
        onDrop: _this.onDrop
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps;
        return React.createElement("div", _extends({}, getRootProps(), {
          className: "drop-zone-input"
        }), React.createElement("input", _extends({}, getInputProps(), {
          onFocus: _this.props.onFocus,
          onBlur: _this.props.onBlur
        })), React.createElement("p", {
          className: "desc"
        }, "Drag & Drop files here"), React.createElement("p", {
          className: "desc"
        }, "or"), React.createElement(_Button["default"], {
          variant: "outlined",
          color: "primary",
          type: "button"
        }, React.createElement(_Icon["default"], {
          name: "file_upload"
        }), "Browse files"));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCrop", function () {
      return _this.collapse.close();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCrop", function (cropStyles) {
      _this.props.onChange(_objectSpread({}, _this.props.value, {
        cropStyles: cropStyles
      }));

      _this.collapse.close();
    });

    _defineProperty(_assertThisInitialized(_this), "renderImage", function () {
      var _this$props = _this.props,
          value = _this$props.value,
          active = _this$props.active,
          toggle = _this$props.toggle,
          setToggle = _this$props.setToggle,
          onChange = _this$props.onChange;
      return React.createElement(_react.Fragment, null, React.createElement("div", {
        className: "drop-zone-image",
        style: {
          backgroundImage: "url(".concat((0, _get["default"])(value, 'file'), ")")
        }
      }), React.createElement(_IconButton["default"], {
        onClick: function onClick(_) {
          return setToggle(true);
        }
      }, React.createElement(_Icon["default"], {
        name: "crop"
      })), React.createElement(_IconButton["default"], {
        onClick: _this.onDelete
      }, React.createElement(_Icon["default"], {
        name: "delete_outline"
      })), React.createElement(_Grow["default"], {
        className: "drop-zone-crop",
        active: active,
        wrapperClass: "crop_container",
        closeOnOutsideClick: false,
        onClose: function onClose(_) {
          return setToggle(false);
        },
        ref: function ref(_ref2) {
          return _this.collapse = _ref2;
        }
      }, React.createElement(_CustomCropper["default"], {
        value: (0, _get["default"])(value, 'file'),
        data: (0, _isEmpty["default"])((0, _get["default"])(value, 'cropStyles')) ? null : value.cropStyles,
        onChange: _this.handleCrop,
        constrols: function constrols(props) {
          return React.createElement(_HeaderControls["default"], _extends({}, props, {
            closeCrop: _this.closeCrop,
            onDelete: _this.onDelete
          }));
        }
      })));
    });

    return _this;
  }

  _createClass(DropzoneInput, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          value = _this$props2.value,
          required = _this$props2.required;
      return React.createElement(_react.Fragment, null, React.createElement(_FormLabel["default"], {
        required: required,
        className: "form-controll-label drop-zone-label"
      }, label), React.createElement("div", {
        className: "drop-zone"
      }, (0, _has["default"])(value, 'file') ? this.renderImage() : this.renderInput()));
    }
  }]);

  return DropzoneInput;
}(_react.Component);

var _default = (0, _withModal["default"])(DropzoneInput);

exports["default"] = _default;