import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '../../../widgets/Icon'

export default function HeaderControls({ value, closeCrop, onDelete, crop, clear, closeAndSave }) {
  return (
    <div className="header">
      <Button variant="outlined" onClick={clear}>Remove selection</Button>
      <Button variant="outlined" onClick={crop}>Maximize selection</Button>
      <Button variant="outlined" onClick={closeAndSave}>Apply crop</Button>
      <IconButton onClick={onDelete}><Icon name="delete_outline"/></IconButton>
      <IconButton onClick={closeCrop}><Icon name="close"/></IconButton>
    </div>
  )
}
