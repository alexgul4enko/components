import { Fragment, cloneElement, createRef } from 'react'
import get from 'lodash/get'
import Icon from '../Icon'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Collapse from '@material-ui/core/Collapse'
import Checkbox from '@material-ui/core/Checkbox'
import LoadingButton from '../LoadingButton'
import Grow from '../Grow'
import { withModal } from '../../hocs'
import DragHandle from './DragHandle'
import { SortableElement } from 'react-sortable-hoc'

const Row = SortableElement((props) => (<TableRow {...props}/>))

function EditableRow({
  active,
  setToggle,
  handleSelectClick,
  row,
  selectable,
  editable,
  renderRow,
  selected,
  headers,
  index,
  dndEnabled,
  dnd,
  FormElement,
}) {
  const collapse = createRef()
  return (
    <Fragment>
      <Row index={index} disabled={!dndEnabled}>
        <Fragment>
          {dnd && (
            <TableCell className="dnd_handler_cell dnd_collumn">
              <DragHandle className="" active={!dndEnabled}/>
            </TableCell>
          )}
          {selectable && (
            <TableCell className="selectable_column">
              <Checkbox checked={!!selected} onChange={handleSelectClick(row)} color="primary" />
            </TableCell>
          )}
          {renderRow({ ...row, selected })}
          {editable && (
            <TableCell>
              <Button onClick={() => setToggle(true) } className="editable_row_button" disableTouchRipple>Edit</Button>
            </TableCell>
          )}
        </Fragment>
      </Row>
      {editable && (
        <TableRow className="collapsible_row_edit">
          <TableCell className="collapsible_cell_edit" colSpan={headers.length + (selectable ? 1 : 0) + (dnd ? 1 : 0)}>
            <Grow
              AnimationElement={Collapse}
              active={active}
              onClose={_ => setToggle(false)}
              ref={collapse}
              wrapperClass={`collapsible_table_form ${dnd ? 'dnd' : ''} ${selectable ? 'selectable' : ''}` }
            >
              <FormElement close={_ => get(collapse, 'current.close')()} initialValues={row}/>
            </Grow>
          </TableCell>
        </TableRow>
      )}
    </Fragment>
  )
}

export default withModal(EditableRow)
