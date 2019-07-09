import { Component } from 'react'
import PropTypes from 'prop-types'
import PhoneInput, { formatPhoneNumberIntl, parsePhoneNumber } from 'react-phone-number-input'
import TextField from '@material-ui/core/Input'
import NumberFormat from 'react-number-format'
import has from 'lodash/has'
import get from 'lodash/get'


export default function PhoneTextInput({
  label,
  helperText,
  inputClassName,
  required,
  toggle,
  setToggle,
  active,
  input,
  meta,
  allowEmptyFormatting,
  inputComponent,
  ...rest
}) {
  return (
    <PhoneInput
      {...rest}
      inputComponent={InputComponent}
      touched={meta.touched}
    />
  )
}


class InputComponent extends Component {
  handleChange = (event) => {
    if(has(event, 'formattedValue')) { return this.props.onChange(`+${event.value}`) }
  }

  componentDidMount() {
    this.focus()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.country !== this.props.country && this.props.country) {
      this.input && this.input.focus()
      const value = get(this.props, `metadata.countries[${this.props.country}][0]`)
      if(!this.props.value) {
        return this.props.onChange(`+${value}`)
      }
    }
  }

  focus = () => null

  render() {
    const {
      fullWidth,
      id,
      autoComplete,
      onBlur,
      onFocus,
      type,
      makeRef,
      phoneFormat,
      mask,
      allowEmptyFormatting,
      country,
      value,
    } = this.props

    return (
      <TextField
        fullWidth
        inputRef={ref => this.input = ref}
        ref={makeRef}
        value={value}
        autoComplete={autoComplete}
        onBlur={onBlur}
        onChange={this.handleChange }
        type={type}
        inputComponent={PhoneInputComponent}
        className="phone_input_component"
        inputProps={{
          format: phoneFormat,
          mask,
          allowEmptyFormatting,
        }}
      />
    )
  }
}

function PhoneInputComponent({ inputRef, onChange, ...other }) {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={onChange}
      allowEmptyFormatting
    />
  )
}

PhoneTextInput.propTypes = {
  phoneFormat: PropTypes.string,
  mask: PropTypes.string,
  allowEmptyFormatting: PropTypes.bool,
}

PhoneTextInput.defaultProps = {
  phoneFormat: '+## (###) ###-####',
  mask: '_',
  allowEmptyFormatting: true,
}
