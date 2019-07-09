import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function ModalConfirmation({
  onHide,
  title,
  active,
  description,
  okTitle,
  cancelTitle,
  handleAction,
}) {
  return (
    <Dialog
      open={active}
      onClose={onHide}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAction(true)} color="primary">{okTitle}</Button>
        <Button onClick={handleAction(false)} color="primary" autoFocus>{cancelTitle}</Button>
      </DialogActions>
    </Dialog>
  )
}
