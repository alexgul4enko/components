import moment from 'moment'
import get from 'lodash/get'
import { Truncate } from '../../../widgets'
import PostFeed from './PostFeed'


export default function CommentFeed({
  username,
  user = {},
  timestamp,
  description,
  handleLike,
  entity_uuid,
  thread_uuid,
}) {
  const { firstname, surname, job_roles, teams, locations, user_avatar } = user || {}
  return (
    <div className="post_comment_card">
      <PostFeed uuid={thread_uuid} handleLike={handleLike} entity_uuid={entity_uuid} isParent/>
      <div className="post_comment_card_wrapper">
        <div className="post_comment">
          <div className="post_comment_user">
            <div className="feed_user_avatar" style={user_avatar ? { backgroundImage: `url(${user_avatar})` } : undefined}/>
            <div className="user_content">
              <h4>{(firstname || surname) ? `${firstname} ${surname}` : username || 'Deleted User'}</h4>
              <p>{moment(timestamp * 1000).format('DD MMM YYYY-HH:mm')}</p>
            </div>
          </div>
          <div className="post_content">
            <Truncate lines={3}>
              <div dangerouslySetInnerHTML={{ __html: get(description, '[0]', description) }}/>
            </Truncate>
            <span className="read_more">Read more</span>
          </div>
        </div>
      </div>

    </div>
  )
}
