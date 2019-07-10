import { withLists } from '../../hocs'
import { InfinityList } from '../../widgets'
import get from 'lodash/get'
import { FeedItem } from './components'


function Feeds({ data, loadNext, showLoadMore }) {
  return (
    <InfinityList
      data={get(data, 'results', [])}
      useDynamicRowHeight
      RowElement={FeedItem}
      onScrollEnd={loadNext}
      showLoadMore={showLoadMore}
      emptyText="There's nothing to show here"
      emptyIcon="feed"
    />
  )
}

export default withLists(Feeds)
