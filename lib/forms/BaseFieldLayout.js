import { Component } from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FieldDescription from './inputs/FormHelperText'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import get from 'lodash/get'


export default class BaseFieldLayout extends Component {
  constructor(props) {
    super(props)
    this.uuid = uuid()
  }

  render() {
    const {
      prefix,
      required,
      helperText,
      maxLength,
      inputComponent: InputComponent,
    } = this.props
    return (
      <FormControl className="form-group">
        <InputComponent
          {...this.props}
          {...this.props.input}
          id={this.uuid}
        />
        {(helperText || maxLength) && (
          <FieldDescription
            required={required}
            maxLength={maxLength}
            length={get(this.props, 'value', '').length}
            id={this.uuid}
          >
            {helperText}
          </FieldDescription>
        )}
        <FormHelperText id={this.uuid} error>{this.props.meta.touched && this.props.meta.error}</FormHelperText>
      </FormControl>
    )
  }
}

BaseFieldLayout.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  prefix: PropTypes.string,
  required: PropTypes.bool,
  InputComponent: PropTypes.element,
}
