import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { makeVariants } from './utils'

export function CheckboxInput({
  value,
  onChange,
  label,
  classes,
  checkedIcon,
  disabled,
  disableRipple,
  icon,
  required,
  inputClassName,
  data,
}) {
  return (
    <Fragment>
      <FormLabel required={required} className="form-controll-label">{label}</FormLabel>
      <FormControlLabel
        control={
          <Checkbox
            className={inputClassName}
            checkedIcon={checkedIcon}
            icon={icon}
            classes={classes}
            disabled={disabled}
            disableRipple={disableRipple}
            checked={Boolean(value)}
            onChange={e => onChange(e.target.checked)}
            color="primary"
          />
        }
        label={data}
      />
    </Fragment>
  )
}

CheckboxInput.propTypes = {
  inputClassName: PropTypes.string,
  value: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string]),
  label: PropTypes.oneOfType([ PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  data: PropTypes.string,
}

CheckboxInput.defaultProps = {
  inputClassName: 'custom-checkbox',
  data: '',
}


export class CheckboxesInput extends Component {
  handleChange = (value) => (e) => {
    if(e.target.checked) {
      return this.props.onChange([...this.props.value, value])
    }
    this.props.onChange((this.props.value || []).filter(item => item !== value))
  }

  render() {
    const {
      data,
      keyExtractor,
      labelExtractor,
      checkedIcon,
      icon,
      classes,
      disableRipple,
      disabled,
      inputClassName,
      label,
      required,
    } = this.props
    const variants = makeVariants(data, keyExtractor, labelExtractor)
    return (
      <Fragment>
        <FormLabel required={required} className="form-controll-label">{label}</FormLabel>
        {
          variants.map(({ label: itemLabel, value, ...rest }) => (
            <FormControlLabel key={value}
              control={
                <Checkbox
                  color="primary"
                  checked={this.props.value.includes(value)}
                  onChange={this.handleChange(value)}
                  className={inputClassName}
                  checkedIcon={checkedIcon}
                  icon={icon}
                  classes={classes}
                  disabled={rest.disabled || disabled}
                  disableRipple={disableRipple}
                />
              }
              label={itemLabel}
            />
          ))
        }
      </Fragment>
    )
  }
}

CheckboxesInput.propTypes = {
  inputClassName: PropTypes.string,
  data: PropTypes.array,
  value: PropTypes.oneOfType([ PropTypes.array, PropTypes.string]),
  label: PropTypes.oneOfType([ PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
}

CheckboxesInput.defaultProps = {
  inputClassName: 'custom-checkbox',
}
