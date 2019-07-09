import ago from '../../../utils/ago'

export default function FeadItemHeader({ username: name, short_text, group_name, timestamp, user = {} }) {
  const { firstname, surname } = user || {}
  const username = (firstname || surname) ? `${firstname} ${surname}` : (name || 'Deleted User')
  return (
    <div className="feed-item-header">
      <h1 className="feed-item-header-title">
        {username} <span>{ago(timestamp)}</span>
      </h1>
      <p className="feed-item-header-description">{short_text}</p>
      <p className="feed-item-header-group">{group_name}</p>
    </div>
  )
}
