import ago from '../../utils/ago'

export default function NotificationCard({ data, timestamp, onClick }) {
  const { image, body, status, title, link } = data || {}
  return (
    <a className="notification" onClick={onClick(data)} target= '_blank' href={link}>
      <div className="notification_user_avatar" style={image ? { backgroundImage: `url(${image})` } : undefined}/>
      <div className="notification_data">
        <h1 className="notification_title">{title || 'Deleted User'}<span>{ago(timestamp)}</span></h1>
        <p className={`notification_desc ${status ? 'active' : ''}`}>{body}</p>
      </div>
    </a>
  )
}
