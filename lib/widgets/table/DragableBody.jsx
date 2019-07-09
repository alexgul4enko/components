import TableBody from '@material-ui/core/TableBody'
import { SortableContainer } from 'react-sortable-hoc'

const DragableBody = SortableContainer(({ children, displayRowCheckbox }) => (
  <TableBody>
    {children}
  </TableBody>
))

DragableBody.muiName = 'TableBody'

export default DragableBody
