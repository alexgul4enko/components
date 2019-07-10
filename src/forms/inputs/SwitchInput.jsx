import { Component, Fragment } from 'react'
import Switch from '@material-ui/core/Switch'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import PropTypes from 'prop-types'

class SwitchInput extends Component {
  handleChange = (event) => this.props.onChange(event.target.checked)
  render() {
    return (
      <Fragment>
        <FormLabel
          required={this.props.required}
          className="form-controll-label"
        >
          {this.props.label}
        </FormLabel>
        <FormControlLabel
          className="switch-input"
          disabled={this.props.disabled}
          label={this.props.values}
          labelPlacement="start"
          control={(
            <Switch
              color="primary"
              checked={Boolean(this.props.value)}
              onChange={this.handleChange}
              value={this.props.value}
            />
          )}
        />
      </Fragment>
    )
  }
}

export default SwitchInput


SwitchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.string,
}

SwitchInput.defaultProps = {
  value: false,
  values: 'Yes/No',
}
