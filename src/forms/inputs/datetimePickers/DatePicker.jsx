import { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import moment from 'moment'
import get from 'lodash/get'
import IconButton from '@material-ui/core/IconButton'
import { DayPickerSingleDateController } from 'react-dates'
import Grow from '../../../widgets/Grow'
import Icon from '../../../widgets/Icon'
import CallendarDay from './CallendarDay'
import DateInputComponent from './DateInputComponent'
import { isFinishEditing } from './utils'

export default class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.id = props.id || uuid()
    this.collapse = createRef()
  }

  toogleCalendar = () => this.setState({ show: !this.state.show })

  hideCalendar = () => this.setState({ show: false })

  handleChange = ({ formattedValue, floatValue }) => {
    if(!formattedValue) {
      return this.props.onChange(formattedValue)
    }
    if(!isFinishEditing(this.props.mask, this.props.format, formattedValue)) { return }
    if(!moment(formattedValue, this.props.momentFormat).isValid()) { return }
    this.props.onChange(formattedValue)
  }

  handleBlur = () => {
    this.props.onBlur()
  }

  handleDateChange = (date) => {
    this.props.onChange(date.format(this.props.momentFormat))
    get(this.collapse, 'current.close')()
  }

  render() {
    const {
      isDayBlocked,
      isOutsideRange,
      isDayHighlighted,
      id,
      label,
      value,
      placeholder,
      format,
      mask,
      onChange,
      onBlur,
      onFocus,
    } = this.props
    return (
      <div className="date_picker">
        <DateInputComponent
          {...this.props}
          id={this.id}
          handleChange={this.handleChange}
          toogleCalendar={this.toogleCalendar}
        />
        <Grow
          active={this.state.show}
          onClose={_ => this.hideCalendar()}
          wrapperClass="callendarModal"
          ref={this.collapse}
        >
          <div className="callendarModal">
            <DayPickerSingleDateController
              numberOfMonths={1}
              focused={this.state.show}
              onFocusChange={this.onFocusChange}
              isDayBlocked={isDayBlocked}
              isOutsideRange={isOutsideRange}
              isDayHighlighted={isDayHighlighted}
              date={this.props.value ? moment(this.props.value, this.props.momentFormat) : undefined}
              onDateChange={this.handleDateChange}
              navPrev={(
                <IconButton className="callendar_month_button">
                  <Icon name="keyboard_arrow_left"/>
                </IconButton>
              )}
              navNext={(
                <IconButton className="callendar_month_button">
                  <Icon name="keyboard_arrow_right"/>
                </IconButton>
              )}
              hideKeyboardShortcutsPanel
              renderCalendarDay={(props) => <CallendarDay key={props.key} {...props}/>}
            />
          </div>
        </Grow>
      </div>

    )
  }
}


DatePicker.propTypes = {
  format: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  allowEmptyFormatting: PropTypes.bool,
  placeholder: PropTypes.string,
  momentFormat: PropTypes.string,
}

DatePicker.defaultProps = {
  format: '##/##/####',
  mask: '_', // ['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y'],
  allowEmptyFormatting: true,
  placeholder: 'DD/MM/YYYY',
  momentFormat: 'DD/MM/YYYY',
}
