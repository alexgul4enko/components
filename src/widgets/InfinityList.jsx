import { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { List, CellMeasurerCache, CellMeasurer, AutoSizer } from 'react-virtualized'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import Icon from './Icon'

export default class InfinityList extends Component {
  constructor(props) {
    super(props)
    this.cache = new CellMeasurerCache({
      defaultHeight: 60,
      fixedWidth: true,
    })
  }

  getListItem = (index) => get(this.props, `data[${index}]`)

  recalculateHeight = (index) => {
    this.cache.clearAll()
    this._list && this._list.recomputeRowHeights()
  }

  getRowHeight = ({ index }) => {
    return this.getListItem(index).size
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.data !== prevProps.data) {
      this.recalculateHeight()
    }
  }

  handleScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
    if((clientHeight + scrollTop - scrollHeight) >= -30) {
      this.props.onScrollEnd && this.props.onScrollEnd()
    }
  }

  renderRow = ({ index, isScrolling, key, parent, style }) => {
    const { RowElement, useDynamicRowHeight, data, count } = this.props
    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div className={'feeds-list-item'} style={style}>
          {index === data.length && index !== (count - 1) ? (
            <div className="list_footer">
              <div><CircularProgress size={24} color="primary"/></div>
            </div>
          ) : (<RowElement data={this.getListItem(index)}/>)
          }
        </div>
      </CellMeasurer>
    )
  }


  render() {
    const { data, listRowHeight, useDynamicRowHeight, showLoadMore, emptyText, emptyIcon } = this.props
    if(isEmpty(data)) {
      return <EmptyList emptyText={emptyText} emptyIcon={emptyIcon}/>
    }
    return (
      <AutoSizer>
        {
          ({ width, height }) => (
            <List
              ref={ref => this._list = ref}
              className="infinityList"
              height={height}
              overscanRowCount={2}
              rowCount={data.length + (showLoadMore ? 1 : 0)}
              deferredMeasurementCache={this.cache}
              rowHeight={this.cache.rowHeight}
              rowRenderer={this.renderRow}
              width={width}
              onScroll={this.handleScroll}
            />
          )
        }
      </AutoSizer>
    )
  }
}

function EmptyList({ emptyIcon, emptyText = 'Nothing to show...' }) {
  return (
    <div className="empty_list_data">
      <div className="empty_list_data_content">
        {emptyIcon && <Icon name={emptyIcon}/>}
        {emptyText}
      </div>
    </div>
  )
}
