import { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import get from 'lodash/get'
import moment from 'moment'
import { Icon, Truncate } from '../../../widgets'
import ActionButton from './ActionButton'
import { withStyles } from '../../../theme'

function PostFeed({
  user,
  timestamp,
  category,
  category_colour,
  description,
  attachments,
  isLiked,
  likes_count,
  comment_count,
  username,
  handleLike,
  branding,
  entity_uuid,
  uuid,
  isParent,
}) {
  const { firstname, surname, job_roles, teams, locations, user_avatar } = user || {}
  const categoryName = get(category, 'name', category)
  const categoryColour = get(category, 'category_colour', category)
  const uri = get(attachments, '[0].file_download')
  const color = isLiked ? get(branding, 'link_colour', '#005EA5') : '#656565'
  return (
    <div className="post-feed-card">
      <div className="user_feed feed_content">
        <div className="feed_user_avatar" style={user_avatar ? { backgroundImage: `url(${user_avatar})` } : undefined}/>
        <div className="user_content">
          <h4>{(firstname || surname) ? `${firstname} ${surname}` : username || 'Deleted User'}</h4>
          <p>{moment(timestamp * 1000).format('DD MMM YYYY-HH:mm')}</p>
          <div className="feed_category">
            <Icon name="label" color={ categoryColour } size={20}/>
            <span>{categoryName}</span>
          </div>
        </div>
      </div>
      <div className="post_content">
        <Truncate lines={3}>
          <div dangerouslySetInnerHTML={{ __html: description }}/>
        </Truncate>
        <span className="read_more">Read more</span>
      </div>
      {
        uri && <div style={ { backgroundImage: `url(${uri})` } } className="featured_image"/>
      }
      <div className="feed_buttons">
        <ActionButton
          onClick={handleLike(uuid, entity_uuid, isLiked, isParent)}
          name={isLiked ? 'thumb_up_alt' : 'thumb_up_off_alt'}
          color={color}
          info={likes_count}
        />
        <ActionButton
          onClick={handleLike(uuid, entity_uuid, isLiked, isParent)}
          name="chat_bubble"
          info={comment_count}
          disabled
        />
      </div>
    </div>
  )
}

export default compose(
  withStyles,
  connect(({ posts }, { uuid }) => ({
    ...get(posts, `data[${uuid}]`, {}),
  }))
)(PostFeed)
