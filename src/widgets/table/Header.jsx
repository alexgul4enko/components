import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import SortableTableCell from './SortableTableCell'
import Icon from '../Icon'
import DragHandle from './DragHandle'

export default function Header({
  selectable,
  headers,
  handleSelectAllChange,
  checked,
  selected,
  ActionsComponent,
  filters,
  handleSort,
  children,
  dnd,
}) {
  return (
    <TableHead className="custom_table_header">
      <TableRow className="info_row">
        <TableCell className="info_cell" colSpan={headers.length + (selectable ? 1 : 0) + (dnd ? 1 : 0)}>
          <div className="custom_table_header_actions">
            <ActionsComponent selected={selected}/>
            {children}
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        {dnd && (
          <TableCell className="dnd_header_cell dnd_collumn">
            <DragHandle/>
          </TableCell>
        )}
        {selectable && (
          <TableCell className="selectable_column">
            <Checkbox
              checked={checked === 1}
              onChange={handleSelectAllChange}
              color="primary"
              icon={checked === 0 ? <Icon name="indeterminate_check_box"/> : undefined}
            />
          </TableCell>
        )}
        {
          headers.map((item) => (<TableCell key={item.title}><SortableTableCell {...item} filters={filters} handleSort={handleSort}/></TableCell>))
        }
      </TableRow>
    </TableHead>
  )
}

Header.defaultProps = {
  ActionsComponent: () => null,
}
