import { SortableHandle } from 'react-sortable-hoc'
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '../Icon'

const DragHandle = SortableHandle(({ style, active }) => (
  <Tooltip
    title="DND functionality disabled, please clear custom filers to enable DND"
    disableFocusListener={!active}
    disableHoverListener={!active}
    disableTouchListener={!active}
  >
    <div style={{ ...style, ...{ cursor: 'move' } }} className={active ? 'disable' : ''}>
      <Icon name="drag_indicator" size={24}/>
    </div>
  </Tooltip>
))

export default DragHandle
