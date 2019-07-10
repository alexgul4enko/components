import { Component } from 'react'
import { connect } from 'react-redux'
import Feeds from './Feeds'
import { fetch } from './feedsActions'

class FeedsContainer extends Component {
  render() {
    return (
      <Feeds
        {...this.props}
        {...this.props.feeds}
        usePages
      />
    )
  }
}

export default connect(({ feeds } = {}) => ({ feeds: feeds || {} }), { fetch })(FeedsContainer)
