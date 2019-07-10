import { Component, Fragment } from 'react'
import TextField from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import Icon from '../../widgets/Icon'
import withModal from '../../hocs/withModal'

class TextInput extends Component {
  handleChange = (e) => {
    if(this.props.maxLength && e.target.value.length > this.props.maxLength) { return }
    this.props.onChange(e.target.value)
  }

  render() {
    const {
      inputComponent,
      label,
      helperText,
      inputClassName,
      required,
      maxLength,
      toggle,
      setToggle,
      active,
      input,
      meta,
      autoComplete,
      id,
      ...rest
    } = this.props

    return (
      <Fragment>
        <InputLabel
          htmlFor={id}
          required={required}
        >
          {label}
        </InputLabel>
        <TextField
          {...rest}
          id={id}
          className={inputClassName}
          onChange={this.handleChange}
          required={required}
          autoComplete={autoComplete || rest.name}
          endAdornment={
            rest.type === 'password' ? (
              <InputAdornment position="end">
                <IconButton className="input-custom-password-button" onClick={toggle}>
                  <Icon name={active ? 'visibility' : 'visibility_off'}/>
                </IconButton>
              </InputAdornment>
            ) : undefined}
          type={rest.type === 'password' && active ? 'text' : rest.type }
        />
      </Fragment>
    )
  }
}

export default withModal(TextInput)


TextInput.propTypes = {
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
}

TextInput.defaultProps = {
  inputClassName: 'input-custom',
  readOnly: false,
}
