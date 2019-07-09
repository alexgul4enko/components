import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { makeVariants } from './utils'

export default class RadiosInput extends Component {
  handleChange = (e) => this.props.onChange(event.target.value)

  render() {
    const {
      data,
      keyExtractor,
      labelExtractor,
      classes,
      disableRipple,
      disabled,
      inputClassName,
      label,
      required,
      value,
    } = this.props
    const variants = makeVariants(data, keyExtractor, labelExtractor)
    return (
      <Fragment>
        <FormLabel
          component="legend"
          required={required}
          className="form-controll-label"
        >
          {label}
        </FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes}
          value={value}
          onChange={this.handleChange}
        >
          {
            variants.map(({ label: itemLabel, value, ...rest }) => (
              <FormControlLabel
                key={value}
                disabled={rest.disabled || disabled}
                value={value}
                label={itemLabel}
                labelPlacement="end"
                control={(
                  <Radio
                    color="primary"
                    disableRipple={disableRipple}
                  />
                )}

              />
            ))
          }
        </RadioGroup>
      </Fragment>
    )
  }
}

RadiosInput.propTypes = {
  inputClassName: PropTypes.string,
  data: PropTypes.array,
  value: PropTypes.string,
  label: PropTypes.oneOfType([ PropTypes.node, PropTypes.string]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
}

RadiosInput.defaultProps = {
  inputClassName: 'custom-checkbox',
}
