import { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select/async'
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
import debounce from 'lodash/debounce'
import connect from '../../../utils/resource'


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

class AsyncChipInput extends Component {
  constructor(props) {
    super(props)
    this.cacheFetch = debounce(this.fetch, 500)
  }

  handleChange = (value, { action }) => this.props.onChange(value)

  fetch = (text, resolve) => {
    const { endpoint, onLoadOptions, queries, makeQueries } = this.props
    if(!text) { return resolve([]) }
    return this.props.select.fetch(makeQueries(text), { endpoint, queries })
      .then(data => resolve(onLoadOptions(data)))
  }

  loadOptions = (text) => {
    const { endpoint, onLoadOptions, queries } = this.props
    return new Promise((resolve, reject) => this.cacheFetch(text, resolve))
  }

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
        loadOptions={this.loadOptions}
      />
    )
  }
}

AsyncChipInput.defaultProps = {
  emptyMessage: 'No data',
  placeholder: 'Search...',
  isMulti: false,
  getOptionLabel: item => get(item, 'label'),
  getOptionValue: item => get(item, 'uuid'),
  required: false,
  noOptionsMessage: noOptionsMessageComponent,
  onLoadOptions: ({ results }) => results,
  filterOption: _ => true,
  makeQueries: (text) => ({ fulltext_search: text }),
}

export default connect([
  {
    endpoint: 'temp',
    dataFunction: 'none',
    forceUpdates: true,
    namespace: 'select',
  },
])(AsyncChipInput)
