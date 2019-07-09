import Icon from '../../../widgets/Icon'
import Chip from '@material-ui/core/Chip'

export default function MultiValue({ children, removeProps, isFocused, selectProps, ...rest }) {
  return (
    <Chip
      label={children}
      className={`autocoplete_chip ${isFocused ? 'active' : ''}`}
      onDelete={removeProps.onClick}
      deleteIcon={<span className="icon-clear" focusable="false" aria-hidden="true" role="presentation"/>}
    />
  )
}
