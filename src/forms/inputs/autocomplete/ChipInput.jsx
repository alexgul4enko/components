import { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import NoOptionsMessage from './NoResults'
import Control from './Control'
import Placeholder from './Placeholder'
import Option from './OptionComponent'
import Menu from './Menu'
import ValueContainer from './ValueContainer'
import SelectContainer from './SelectContainer'
import SingleValue from './SingleValue'
import MultiValue from './MultiValue'
import ClearIndicator from './ClearIndicator'
import DropdownIndicator from './DropdownIndicator'
import noOptionsMessageComponent from './noOptionsMessage'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'


const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  SelectContainer,
  ClearIndicator,
  DropdownIndicator,
}

export default class ChipInput extends Component {
  constructor(props) {
    super(props)
  }

  handleChange = (value, { action }) => this.props.onChange(value)

  render() {
    const {
      disabled,
      id,
      label,
      placeholder,
      options,
      value,
      isMulti,
      noOptionsMessage,
      required,
      getOptionLabel,
      getOptionValue,
      onFocus,
      onBlur,
      filterOption,
      formatOptionLabel,
    } = this.props
    return (
      <Select
        inputId={id}
        TextFieldProps={{
          label: label,
          InputLabelProps: {
            htmlFor: id,
            required: required,
            disabled: disabled,
            focused: !isEmpty(value) ? true : undefined,
            shrink: !isEmpty(value) ? true : undefined,
            onFocus,
            onBlur,
          },
        }}
        placeholder={placeholder}
        options={options}
        components={components}
        value={value}
        onChange={this.handleChange}
        isMulti={isMulti}
        noOptionsMessage={noOptionsMessage}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        isDisabled={disabled}
        filterOption={filterOption}
        formatOptionLabel={formatOptionLabel}
      />
    )
  }
}

ChipInput.defaultProps = {
  emptyMessage: 'No data',
  placeholder: 'Search...',
  isMulti: false,
  getOptionLabel: item => get(item, 'label'),
  getOptionValue: item => get(item, 'uuid'),
  required: false,
  noOptionsMessage: noOptionsMessageComponent,
}
