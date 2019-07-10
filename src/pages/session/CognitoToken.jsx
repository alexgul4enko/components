import get from 'lodash/get'
import Icon from '../../widgets/Icon'

export default function CognitoToken({ handleAnimationEnd, session }) {
  return (
    <div className="cognito_login">
      <div className="big_logo zoomIn" onAnimationEnd={handleAnimationEnd}/>
      <a
        href={`${process.env.COGNITO_URL}/login?client_id=${process.env.COGNITO_CLIENT_ID}&response_type=${process.env.COGNITO_RESPONSE_TYPE}&redirect_uri=${window.location.origin}/auth/token&scope=${process.env.COGNITO_SCOPE}`}
        className={`login_with_cognito_link ${get(session, 'errors') ? 'active' : ''} arrow_button`}
      >
        Try again
        <Icon name='arrow_right_alt'/>
      </a>
    </div>
  )
}
