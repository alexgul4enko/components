import { Fragment } from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import Checkbox from '@material-ui/core/Checkbox'
import Filter from './Filter'
import Pagination from './Pagination'
import Header from './Header'
import withTables from './withTables'
import CreateForm from './CreateForm'
import EditableRow from './EditableRow'
import TableBody from './DragableBody'

function CustomTable({
  renderRow,
  keyExtractor,
  selectable,
  data,
  headers,
  ActionsComponent,
  filters = {},
  fetch,
  count,
  placeholder,
  selected,
  handleSelectAllChange,
  headerCheckBoxValue,
  checkSelected,
  handleSelectClick,
  handleChangePage,
  handleChangelimit,
  handleSort,
  handleSearch,
  permissions,
  Form,
  addTitle,
  onDragEnd,
  dnd,
}) {
  const dndEnabled = !get(filters, 'order') && !get(filters, 'sort') && !get(filters, 'fulltext_search')
  return (
    <div className="data_table">
      <Filter
        handleSearch={handleSearch}
        placeholder={placeholder}
        filters={filters}
      />
      <Table className={`custom-table ${selectable ? 'selectable' : ''}`}>
        <Header
          selectable={selectable}
          headers={headers}
          handleSelectAllChange={handleSelectAllChange}
          checked={headerCheckBoxValue()}
          selected={selected}
          ActionsComponent={ActionsComponent}
          filters={filters}
          handleSort={handleSort}
          dnd={dnd}
        >
          <Pagination
            {...filters}
            count={count}
            handleChangePage={handleChangePage}
            handleChangelimit={handleChangelimit}
          />
        </Header>
        <TableBody onSortEnd={onDragEnd} useDragHandle>
          {
            get(permissions, 'create') && (
              <TableRow className="collapsible_row create_row">
                <TableCell
                  className="collapsible_cell"
                  colSpan={headers.length + (dnd ? 1 : 0) + (selectable ? 1 : 0)}
                >
                  <CreateForm
                    addTitle={addTitle}
                    dnd={dnd}
                    selectable={selectable}
                    FormElement={Form}
                  />
                </TableCell>
              </TableRow>
            )
          }
          {
            data.map((item, index) => (
              <EditableRow
                dnd={dnd}
                dndEnabled={dndEnabled}
                index={index}
                row={item}
                key={keyExtractor(item)}
                selected={checkSelected(item) > -1}
                handleSelectClick={handleSelectClick}
                selectable={selectable}
                renderRow={renderRow}
                headers={headers}
                editable={get(permissions, 'edit')}
                FormElement={Form}
              />
            ))
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={headers.length + (selectable ? 1 : 0) + (dnd ? 1 : 0)}>
              <Pagination
                {...filters}
                count={count}
                handleChangePage={handleChangePage}
                handleChangelimit={handleChangelimit}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default withTables(CustomTable)


CustomTable.propTypes = {
  renderRow: PropTypes.func.isRequired,
  Header: PropTypes.func,
  HeaderExtra: PropTypes.func,
  keyExtractor: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func,
}

CustomTable.defaultProps = {
  keyExtractor: (item) => item.id,
  onSelectChange: () => {},
}
