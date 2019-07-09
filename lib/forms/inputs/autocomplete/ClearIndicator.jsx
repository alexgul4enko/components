import Icon from '../../../widgets/Icon'
import IconButton from '@material-ui/core/IconButton'

export default function ClearIndicator({ innerProps, ...rest }) {
  return (
    <IconButton {...innerProps} className="autocoplete_clear"><Icon name="clear"/></IconButton>
  )
}
