import { Fragment } from 'react'
import TextField from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Icon from '../../../widgets/Icon'
import MaskedInput from './MaskedInput'

export default function DateInputComponent({
  id,
  label,
  value,
  placeholder,
  onBlur,
  onFocus,
  format,
  required,
  mask,
  onChange,
  toogleCalendar,
  handleChange,
  shrink,
}) {
  return (
    <Fragment>
      <InputLabel shrink={shrink} htmlFor={id} required={required}>{label} </InputLabel>
      <TextField
        id={id}
        value={value}
        placeholder={placeholder}
        inputComponent={MaskedInput}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
        inputProps={{
          format,
          mask,
          onChange,
          onChange: handleChange,
        }}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton onClick={toogleCalendar}>
              <Icon name="today"/>
            </IconButton>
          </InputAdornment>
        )}
      />
    </Fragment>
  )
}
