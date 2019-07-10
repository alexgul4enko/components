import { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import moment from 'moment'
import get from 'lodash/get'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import { DayPickerRangeController } from 'react-dates'
import { START_DATE, END_DATE } from 'react-dates/constants'
import Grow from '../../../widgets/Grow'
import Icon from '../../../widgets/Icon'
import CallendarDay from './CallendarDay'
import DateInputComponent from './DateInputComponent'
import { isFinishEditing } from './utils'


export default class DateRangePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      focusedInput: START_DATE,
    }
    this.from_id = uuid()
    this.to_id = uuid()
    this.collapse = createRef()
    this.state = { ...(props.value || {}) }
  }

  toogleCalendar = (focusedInput) => (_) => this.setState({ show: !this.state.show, focusedInput })

  hideCalendar = () => this.setState({ show: false })

  handleChange = (value) => {
    this.props.onChange({ ...(this.props.value || {}), ...value })
  }

  handleInputChange = (key) => ({ formattedValue, floatValue }) => {
    if(!formattedValue) {
      return this.handleChange({ ...(this.props.value || {}), [key]: formattedValue })
    }
    if(!isFinishEditing(this.props.mask, this.props.format, formattedValue)) { return }
    if(!moment(formattedValue, this.props.momentFormat).isValid()) { return }
    this.handleChange({ ...(this.props.value || {}), [key]: formattedValue })
  }

  handleDateChange = ({ startDate, endDate }) => {
    if(!startDate && !endDate) { return }
    this.props.onChange({
      startDate: moment(startDate).format(this.props.momentFormat),
      endDate: moment(endDate).format(this.props.momentFormat),
    })
  }

  onFocusChange = focusedInput => this.setState({ focusedInput: focusedInput || START_DATE })

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
    } = this.props
    const { startDate, endDate } = value || {}
    return (
      <div className="date_picker">
        <div className="range_inputs">
          <FormControl id={this.from_id}>
            <DateInputComponent
              {...this.props}
              label="From"
              id={this.from_id}
              value={startDate}
              onChange={this.handleInputChange('startDate')}
              handleChange={this.handleInputChange('startDate')}
              toogleCalendar={this.toogleCalendar(START_DATE)}
              shrink={startDate ? true : undefined}
              onBlur={undefined}
              onFocus={undefined}
            />
          </FormControl>
          <Icon name="trending_neutral" size={24}/>
          <FormControl id={this.to_id}>
            <DateInputComponent
              {...this.props}
              label="To"
              value={endDate}
              id={this.to_id}
              onChange={this.handleInputChange('endDate')}
              handleChange={this.handleInputChange('endDate')}
              toogleCalendar={this.toogleCalendar(END_DATE)}
              shrink={endDate ? true : undefined}
              onBlur={undefined}
              onFocus={undefined}
            />
          </FormControl>
        </div>
        <Grow
          active={this.state.show}
          onClose={_ => this.hideCalendar()}
          wrapperClass="callendarModal"
          ref={this.collapse}
        >
          <div className="callendarModal">
            <DayPickerRangeController
              startDate={startDate ? moment(startDate, this.props.momentFormat) : null }
              endDate={endDate ? moment(endDate, this.props.momentFormat) : null }
              focusedInput={this.state.focusedInput || START_DATE}
              onFocusChange={this.onFocusChange}
              onDatesChange={this.handleDateChange}
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
              renderCalendarDay={(props) => <CallendarDay key={props.key} {...props}/> }
            />
          </div>
        </Grow>
      </div>

    )
  }
}


DateRangePicker.propTypes = {
  format: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  allowEmptyFormatting: PropTypes.bool,
  placeholder: PropTypes.string,
  momentFormat: PropTypes.string,
}

DateRangePicker.defaultProps = {
  format: '##/##/####',
  mask: '_', // ['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y'],
  allowEmptyFormatting: true,
  placeholder: 'DD/MM/YYYY',
  momentFormat: 'DD/MM/YYYY',
}
