import get from 'lodash/get'
import Icon from '../Icon'
import Button from '@material-ui/core/Button'

export default function SortableTableCell({ title, orderBy, filters, handleSort }) {
  const arrowIcon = orderBy !== get(filters, 'sort', null)
    ? 'swap_vert'
    : get(filters, 'order') === 'asc'
      ? 'arrow_upward'
      : 'arrow_downward'
  if(!orderBy) { return null }
  return (
    <Button
      disableTouchRipple
      disabled={!orderBy}
      onClick={handleSort(orderBy)}
      className="custom_table_sotrable_button"
    >
      <Icon
        name={arrowIcon}
        className={get(filters, 'sort', null) !== orderBy ? 'hidden' : ''}
        size={20}
      />
      {title}
    </Button>
  )
}
