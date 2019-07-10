"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangeField = exports.RadiosField = exports.CheckboxesField = exports.CheckboxField = exports.DropzoneField = exports.AsyncChipField = exports.ChipField = exports.CurrencyField = exports.DatePickerField = exports.ColorField = exports.SwitchField = exports.PhoneTextField = exports.TextField = void 0;

var _BaseFieldHOC = _interopRequireDefault(require("./BaseFieldHOC"));

require("react-dates/initialize");

var _TextInput = _interopRequireDefault(require("./inputs/TextInput"));

var _PhoneTextInput = _interopRequireDefault(require("./inputs/PhoneTextInput"));

var _SwitchInput = _interopRequireDefault(require("./inputs/SwitchInput"));

var _ColorInput = _interopRequireDefault(require("./inputs/ColorInput"));

var _datetimePickers = require("./inputs/datetimePickers");

var _CurrencyInput = _interopRequireDefault(require("./inputs/CurrencyInput"));

var _autocomplete = require("./inputs/autocomplete");

var _imageUpload = _interopRequireDefault(require("./inputs/imageUpload"));

var _CheckboxInput = require("./inputs/CheckboxInput");

var _RadiosInput = _interopRequireDefault(require("./inputs/RadiosInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextField = (0, _BaseFieldHOC["default"])(_TextInput["default"]);
exports.TextField = TextField;
var PhoneTextField = (0, _BaseFieldHOC["default"])(_PhoneTextInput["default"]);
exports.PhoneTextField = PhoneTextField;
var SwitchField = (0, _BaseFieldHOC["default"])(_SwitchInput["default"]);
exports.SwitchField = SwitchField;
var ColorField = (0, _BaseFieldHOC["default"])(_ColorInput["default"]);
exports.ColorField = ColorField;
var DatePickerField = (0, _BaseFieldHOC["default"])(_datetimePickers.DatePicker);
exports.DatePickerField = DatePickerField;
var DateRangeField = (0, _BaseFieldHOC["default"])(_datetimePickers.DateRangePicker);
exports.DateRangeField = DateRangeField;
var CurrencyField = (0, _BaseFieldHOC["default"])(_CurrencyInput["default"]);
exports.CurrencyField = CurrencyField;
var ChipField = (0, _BaseFieldHOC["default"])(_autocomplete.ChipInput);
exports.ChipField = ChipField;
var AsyncChipField = (0, _BaseFieldHOC["default"])(_autocomplete.AsyncChipInput);
exports.AsyncChipField = AsyncChipField;
var DropzoneField = (0, _BaseFieldHOC["default"])(_imageUpload["default"]);
exports.DropzoneField = DropzoneField;
var CheckboxField = (0, _BaseFieldHOC["default"])(_CheckboxInput.CheckboxInput);
exports.CheckboxField = CheckboxField;
var CheckboxesField = (0, _BaseFieldHOC["default"])(_CheckboxInput.CheckboxesInput);
exports.CheckboxesField = CheckboxesField;
var RadiosField = (0, _BaseFieldHOC["default"])(_RadiosInput["default"]);
exports.RadiosField = RadiosField;
RadiosField.defaultProps = {
  formControlComponent: 'fieldset'
};