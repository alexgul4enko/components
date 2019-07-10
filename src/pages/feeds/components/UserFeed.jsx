import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

export default function({ user = {}, username }) {
  if(isEmpty(user)) { return null }
  const { firstname, surname, job_roles, teams, locations, user_avatar } = user || {}
  return (
    <div className="user_feed feed_content">
      <div className="feed_user_avatar" style={user_avatar ? { backgroundImage: `url(${user_avatar})` } : undefined}/>
      <div className="user_content">
        <h4>{(firstname || surname) ? `${firstname} ${surname}` : username || 'Deleted User'}</h4>
        <p>{get(job_roles, '[0].name')}</p>
        <p>{get(teams, '[0].name')}</p>
        <p>{get(locations, '[0].name')}</p>
      </div>
    </div>
  )
}
