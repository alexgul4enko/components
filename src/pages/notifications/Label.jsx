import { Component } from 'react'
import get from 'lodash/get'
import has from 'lodash/has'
import { LabeledIcon } from '../../widgets'
import connectResources from '../../utils/resource'

class Label extends Component {
  checkNotifications = () => {
    this.props.unread_notifications.fetch({ offset: 0, limit: 100000 })
      .then(({ results }) => {
        const count = (results || []).filter(({ status }) => !!status).length
        this.props.unread_notifications.setData({ count }, { dataFunction: 'object' })
      })
  }

  componentDidMount() {
    this.checkNotifications()
  }

  handleClick = () => {
    this.checkNotifications()
    this.props.onClick()
  }

  render() {
    const data = get(this.props, 'unread_notifications.data.count', 0)
    const loading = !has(this.props, 'unread_notifications.data.count')
    return (
      <LabeledIcon
        icon="notifications_none"
        label={ (data > 99) ? '+99' : data }
        loading={loading}
        {...this.props}
        onClick={this.handleClick}
      />
    )
  }
}

export default connectResources([{
  namespace: 'unread_notifications',
  endpoint: 'notifications',
  queries: ['offset', 'limit'],
  dataFunction: 'none',
}])(Label)
