import { Component } from 'react'
import connectResources from '../../utils/resource'
import Notifications from './Notifications'
import get from 'lodash/get'


class NotificatoinsContainer extends Component {
  handleNotificationClick = ({ link, uuid } = {}) => () => {
    return this.props.notifications.replace({ uuid }, { endpoint: 'notifications/:uuid', dataFunction: 'none' })
      .then(_ => this.props.notifications.fetch({ offset: 0, limit: 8 }, { dataFunction: 'replace' }))
  }
  clearAll = () => {
    Promise.all(get(this.props, 'notifications.data.results', [])
      .map(({ uuid }) => this.props.notifications.replace({ uuid }, { endpoint: 'notifications/:uuid', dataFunction: 'none' })))
      .then(_ => this.props.notifications.fetch({ offset: 0, limit: 8 }, { dataFunction: 'replace' }))
      .then(({ count }) => this.props.notifications.setData({ count }, { namespace: 'unread_notifications', dataFunction: 'object' }))
  }
  render() {
    return (
      <Notifications
        {...this.props}
        {...this.props.notifications}
        useLimit
        apiParams={{ limit: 8 }}
        handleNotificationClick={this.handleNotificationClick}
        clearAll={this.clearAll}
      />
    )
  }
}

export default connectResources([{
  namespace: 'notifications',
  queries: ['offset', 'limit'],
  dataFunction: 'paginationList',
}])(NotificatoinsContainer)
