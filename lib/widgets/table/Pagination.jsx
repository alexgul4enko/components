import { PureComponent } from 'react'
import TablePagination from '@material-ui/core/TablePagination'
import PropTypes from 'prop-types'

export default function Pagination({
  count,
  limit,
  offset,
  handleChangePage,
  handleChangelimit,
}) {
  return (
    <TablePagination
      className="custom-pagination"
      component="div"
      count={count}
      rowsPerPage={limit}
      page={offset / limit}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangelimit}
      labelRowsPerPage='Show'
      classes={{
        root: 'pagination_root',
        toolbar: 'pagination_toolbar',
        spacer: 'pagination_spacer',
        menuItem: 'pagination_menuItem',
        caption: 'pagination_caption',
        input: 'pagination_input',
        selectRoot: 'pagination_selectRoot',
        select: 'pagination_select',
        selectIcon: 'pagination_selectIcon',
        actions: 'pagination_actions',
      }}
    />
  )
}


Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
}

Pagination.defaultProps = {
  count: 0,
  offset: 0,
  limit: 0,
}
