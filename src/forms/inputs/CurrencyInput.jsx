import { Component, Fragment } from 'react'
import TextField from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

class CurrencyInput extends Component {
  constructor(props) {
    super(props)
  }

  handleChange = ({ floatValue = '', value } = {}) => {
    this.props.onChange(this.props.isNumber ? floatValue : value)
  }

  render() {
    const {
      value,
      thousandSeparator,
      prefix,
      suffix,
      label,
      placeholder,
      id,
      fullWidth,
      currencuFormat,
      mask,
      thousandsGroupStyle,
      decimalScale,
      fixedDecimalScale,
      allowNegative,
      allowEmptyFormatting,
      onBlur,
      onFocus,
      required,
    } = this.props
    const classes = prefix ? { root: 'currencyLabel', focused: 'focused' } : {}
    return (
      <Fragment>
        <InputLabel
          htmlFor={id}
          required={required}
          classes={classes}
        >
          {label}
        </InputLabel>
        <TextField
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          fullWidth={fullWidth}
          id={id}
          onBlur={onBlur}
          onFocus={onFocus}
          inputComponent={CurrencyInputComponent}
          required={required}
          inputProps={{
            format: currencuFormat,
            mask,
            thousandsGroupStyle,
            thousandSeparator,
            decimalScale,
            fixedDecimalScale,
            allowNegative,
            allowEmptyFormatting,
          }}
          endAdornment={ suffix && (<InputAdornment position="end">{suffix}</InputAdornment>)}
          startAdornment={ prefix && (<InputAdornment position="start">{prefix}</InputAdornment>)}
        />
      </Fragment>
    )
  }
}

export default CurrencyInput

function CurrencyInputComponent({ inputRef, onChange, ...other }) {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={onChange}
    />
  )
}


CurrencyInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thousandSeparator: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  currencuFormat: PropTypes.string,
  thousandsGroupStyle: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isNumber: PropTypes.bool,
  allowEmptyFormatting: PropTypes.bool,
}

CurrencyInput.defaultProps = {
  value: '',
  thousandSeparator: true,
  fullWidth: true,
  isNumber: true,
  allowEmptyFormatting: true,
}
