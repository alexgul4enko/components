import Icon from '../../../widgets/Icon'
import IconButton from '@material-ui/core/IconButton'

export default function DropdownIndicator({ isFocused, innerProps }) {
  return (
    <IconButton
      className={`autocoplete_dropdown ${isFocused ? 'active' : ''}`}
      {...innerProps}
    >
      <Icon name="keyboard_arrow_down"/>
    </IconButton>
  )
}
