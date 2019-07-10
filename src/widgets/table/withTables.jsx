import { Component } from 'react'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import { arrayMove } from 'react-sortable-hoc'

export default function withTables(TableComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        selected: [],
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      return get(this.props, 'data') !== get(nextProps, 'data') || this.state.selected !== nextState.selected
    }

    handleSelectAllChange = (event, checked) => {
      const selected = checked ? this.props.data.map(item => this.props.keyExtractor(item)) : []
      this.props.onSelectChange && this.props.onSelectChange(selected)
      this.setState({ selected })
    }

    handleSelectClick = (row) => {
      return (event, checked) => {
        const id = this.props.keyExtractor(row)
        const selected = checked ? this.state.selected.concat([id]) : this.state.selected.filter(item => item !== id)
        this.props.onSelectChange && this.props.onSelectChange(selected)
        this.setState({ selected })
      }
    }

    checkSelected= (row) => {
      return this.state.selected.findIndex(item => item === this.props.keyExtractor(row))
    }

    headerCheckBoxValue = () => {
      if(isEmpty(this.state.selected) || isEmpty(this.props.data)) { return -1 }
      if(this.state.selected.length < this.props.data.length) { return 0 }
      return 1
    }

    handleChangePage = (event, page) => {
      this.props.fetch({ ...this.props.filters, offset: page * this.props.filters.limit })
      this.setState({ selected: [] })
    }

    handleChangelimit = (event) => {
      const limit = event.target.value
      this.props.fetch({ ...this.props.filters, limit: limit, offset: 0 })
      this.setState({ selected: [] })
    }

    handleSort = (orderBy) => () => {
      const fetchFilters = orderBy !== get(this.props, 'filters.sort', null) ? {
        sort: orderBy,
        order: 'desc',
      } : get(this.props, 'filters.order') === 'desc' ? {
        sort: orderBy,
        order: 'asc',
      } : {
        sort: undefined,
        order: undefined,
      }
      this.props.fetch({ ...this.props.filters, ...fetchFilters })
      this.setState({ selected: [] })
    }

    handleSearch = (fulltext_search) => {
      if(get(this.props, 'filters.fulltext_search') === fulltext_search) { return }
      this.props.fetch({ ...this.props.filters, offset: 0, fulltext_search })
      this.setState({ selected: [] })
    }

    onDragEnd = ({ oldIndex, newIndex }) => {
      this.props.setData({
        count: this.props.count,
        results: arrayMove(this.props.data, oldIndex, newIndex),
      })
      // const nextIndex = get(this.props, `data[${newIndex}].order`)
      // const item = get(this.props, `data[${oldIndex}]`)
      // TODO: make integration with BE
      // this.props.update({...item,row}, {endpoint: 'locations/:uuid'})
      // this.props.fetch(this.props.filters)
    }

    render() {
      return (
        <TableComponent
          {...this.props}
          {...this.state}
          handleSelectAllChange={this.handleSelectAllChange}
          handleSelectClick={this.handleSelectClick}
          checkSelected={this.checkSelected}
          headerCheckBoxValue={this.headerCheckBoxValue}
          handleChangePage={this.handleChangePage}
          handleChangelimit={this.handleChangelimit}
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
          onDragEnd={this.onDragEnd}
        />
      )
    }
  }
}
