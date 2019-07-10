import { withLists } from '../../hocs'
import { InfinityList } from '../../widgets'
import Button from '@material-ui/core/Button'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import NotificationCard from './NotificationCard'
import ClearAll from './ClearAll'

function Notifications({ data, handleNotificationClick, clearAll, loadNext, showLoadMore }) {
  return (
    <div className="notifications_container">
      <ClearAll
        disabled={isEmpty(get(data, 'results', []))}
        clearAll={clearAll}
      />
      <div className="notifications_list">
        <InfinityList
          data={get(data, 'results', [])}
          count={get(data, 'count', 0)}
          useDynamicRowHeight
          RowElement={(props) => <NotificationCard {...props} onClick={handleNotificationClick}/>}
          emptyText="No new notifications"
          emptyIcon="bell"
          onScrollEnd={loadNext}
          showLoadMore={showLoadMore}
        />
      </div>
      {/* <Button disabled={isEmpty(get(data, 'results', []))} onClick={() => { alert('not implemented') }} className="notifications_action_button">
        View all
      </Button> */}
    </div>
  )
}

export default withLists(Notifications)
