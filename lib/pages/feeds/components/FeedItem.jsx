import { Component } from 'react'
import connect from '../../../utils/resource'
import FeadItemHeader from './FeadItemHeader'
import PostFeed from './PostFeed'
import UserFeed from './UserFeed'
import CommentFeed from './CommentFeed'
import { like } from '../feedsActions'

class FeedItem extends Component {
  renderItem = () => {
    switch (this.props.data.entity_type) {
      case 'node':
        return <PostFeed uuid={this.props.data.entity_uuid} handleLike={this.handleLike}/>
      case 'comment':
        return <CommentFeed {...this.props.data} handleLike={this.handleLike}/>
      case 'user':
        return <UserFeed {...this.props.data} />
      default:
        return null
    }
  }

  handleLike = (uuid, entity_uuid, isLiked, isParent) => () => {
    const method = isLiked ? 'remove' : 'replace'
    return this.props.like[method]({ uuid })
      .then(() => this.props.like.fetch({ uuid }, { endpoint: 'posts/:uuid' }))
      .then((post) => {
        this.props.like.setData(
          { [uuid]: { ...(!isParent ? this.props.data : {}), ...post, isLiked: !isLiked } },
          {
            namespace: 'posts',
            dataFunction: 'object',
          }
        )
        return post
      })
  }

  render() {
    return (
      <a className="post_item" href={this.props.data.link} target="_blank" rel="noopener noreferrer">
        <FeadItemHeader {...this.props.data}/>
        {this.renderItem()}
      </a>
    )
  }
}

export default connect([
  {
    namespace: 'like',
    endpoint: 'posts/:uuid/like',
    forceUpdates: true,
    dataFunction: 'none',
  },
])(FeedItem)
