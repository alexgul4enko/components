import BaseFieldHOC from './BaseFieldHOC'
import 'react-dates/initialize'

import TextInput from './inputs/TextInput'
import PhoneTextInput from './inputs/PhoneTextInput'
import SwitchInput from './inputs/SwitchInput'
import ColorInput from './inputs/ColorInput'
import { DatePicker, DateRangePicker } from './inputs/datetimePickers'
import CurrencyInput from './inputs/CurrencyInput'
import { ChipInput, AsyncChipInput } from './inputs/autocomplete'
import DropzoneInput from './inputs/imageUpload'
import { CheckboxInput, CheckboxesInput } from './inputs/CheckboxInput'
import RadiosInput from './inputs/RadiosInput'

const TextField = BaseFieldHOC(TextInput)
const PhoneTextField = BaseFieldHOC(PhoneTextInput)
const SwitchField = BaseFieldHOC(SwitchInput)
const ColorField = BaseFieldHOC(ColorInput)
const DatePickerField = BaseFieldHOC(DatePicker)
const DateRangeField = BaseFieldHOC(DateRangePicker)
const CurrencyField = BaseFieldHOC(CurrencyInput)
const ChipField = BaseFieldHOC(ChipInput)
const AsyncChipField = BaseFieldHOC(AsyncChipInput)
const DropzoneField = BaseFieldHOC(DropzoneInput)
const CheckboxField = BaseFieldHOC(CheckboxInput)
const CheckboxesField = BaseFieldHOC(CheckboxesInput)
const RadiosField = BaseFieldHOC(RadiosInput)

RadiosField.defaultProps = {
  formControlComponent: 'fieldset',
}

export {
  TextField,
  PhoneTextField,
  SwitchField,
  ColorField,
  DatePickerField,
  CurrencyField,
  ChipField,
  AsyncChipField,
  DropzoneField,
  CheckboxField,
  CheckboxesField,
  RadiosField,
  DateRangeField,
}
