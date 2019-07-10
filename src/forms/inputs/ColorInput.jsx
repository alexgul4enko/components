import { Component } from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import { ChromePicker } from 'react-color'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Icon from '../../widgets/Icon'
import Grow from '../../widgets/Grow'
import withModal from '../../hocs/withModal'

class ColorInput extends Component {
  handleChange = ({ hex }) => this.props.onChange(hex)

  render() {
    const { uuid, label, toggle, value, active } = this.props
    return (
      <div className="color_picker_wrapper">
        <FormLabel className="form-controll-label">{label}</FormLabel>
        <Button
          onClick={!active ? toggle : undefined}
          className="color_picker_button"
          type="button"
        >
          <div className="color_value" style={{ backgroundColor: value }}/>
          <Icon name="arrow_drop_down"/>
        </Button>
        <Grow active={active} onClose={toggle} className="pickers_modal" >
          <ChromePicker
            color={ this.props.value || undefined}
            onChangeComplete={ this.handleChange }
            disableAlpha
          />
        </Grow>
      </div>
    )
  }
}

export default withModal(ColorInput)


ColorInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

ColorInput.defaultProps = {
}
