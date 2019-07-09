import Icon from './Icon'
import LoadingButton from './LoadingButton'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

export default function LabeledIcon({ icon, label, active, className, onClick, loading = false }) {
  return (
    <LoadingButton
      className={className}
      onClick={onClick}
      loading={loading}
      disabled={loading}
      size={20}
      loadingColor="primary"
      disableRipple
      ButtonComponent={IconButton}
    >

      {label ? (
        <Badge badgeContent={label} color="error">
          <Icon name={icon}/>
        </Badge>
      )
        : (<Icon name={icon}/>)
      }
    </LoadingButton>
  )
}
