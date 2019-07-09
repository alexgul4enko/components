import Icon from '../../widgets/Icon'

export default function LoginScreen({ handleAnimationEnd }) {
  return (
    <div className="cognito_login">
      <h1 className="redirect_info zoomIn" onAnimationEnd={handleAnimationEnd}>We will redirect to Cognoto authorization size</h1>
      <div className="redirect_to_cognito">
        <div className="small_logo zoomIn"/>
        <div className="to">
          <div>
            <Icon name="arrow_forward_ios" color="#fff" size={24} className="look_at_this infinity_animations"/>
            <div className="cognito_logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}
