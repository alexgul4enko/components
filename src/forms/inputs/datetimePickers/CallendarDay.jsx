import { withStyles } from '../../../theme'
import IconButton from '@material-ui/core/IconButton'
import has from 'lodash/has'
import get from 'lodash/get'
import tinycolor from 'tinycolor2'
import memizedOne from 'memoize-one'

function CallendarDay({
  day,
  isFocused,
  isOutsideDay,
  isOutsideRange,
  key,
  ariaLabel,
  onDayClick,
  onDayMouseEnter,
  onDayMouseLeave,
  modifiers,
  branding,
  ...rest
}) {
  if(!day) { return <td></td> }
  return (
    <td
      key={key}
      className="CalendarDay CalendarDay_1 CalendarDay__default"
      role="button"
      aria-label={ariaLabel}
    >
      <IconButton
        key={key}
        style={getStyles(modifiers, branding)}
        disabled={isOutsideDay || isOutsideRange}
        onClick={(e) => onDayClick(day, e)}
        onMouseEnter={(e) => onDayMouseEnter(day, e) }
        onMouseLeave={(e) => onDayMouseLeave(day, e) }
      >
        {day.date()}
      </IconButton>
    </td>
  )
}

export default withStyles(CallendarDay)

function parseColor(branding) {
  const color = tinycolor(get(branding, 'link_colour', '#005EA5'))
  const primary = tinycolor(color)
  const primaryAlpha = tinycolor(color)
  primaryAlpha.setAlpha(0.5)

  return {
    primary: {
      color: primary.isLight() ? '#000' : '#fff',
      backgroundColor: primary.toHexString(),
    },
    lighter: {
      color: primaryAlpha.isLight() ? '#000' : '#fff',
      backgroundColor: primaryAlpha.toRgbString(),
    },
  }
}
const memoizeColor = memizedOne(parseColor)

function getStyles(modifiers, branding) {
  if(!modifiers) { return {} }
  const primary = memoizeColor(branding).primary
  if(modifiers.has('selected')) {
    return primary
  }
  if(modifiers.has('selected-start')) {
    return primary
  }
  if(modifiers.has('selected-end')) {
    return primary
  }
  if(modifiers.has('selected-span')) {
    return {
      ...memoizeColor(branding).lighter,
    }
  }
}
