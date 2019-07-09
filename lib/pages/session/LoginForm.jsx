import { TextField } from '../../forms'
import { Icon, LoadingButton, AppLogo } from '../../widgets'
import Button from '@material-ui/core/Button'

export default function Login({ handleSubmit, submitting }) {
  return (
    <div className="session-layout">
      <form className="auth-form singin" onSubmit={handleSubmit}>
        <AppLogo/>
        <h2>Member sign in</h2>
        <div className="form-controls">
          <TextField
            name="username"
            type="text"
            placeholder="Enter your username or email address"
            label="Username or email address"
            fullWidth
          />
          <TextField
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            fullWidth
          />
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            className="arrow_button"
            disabled={submitting}
            loading={submitting}
          >
            <span>Continue</span>
            <Icon name='arrow_right_alt'/>
          </LoadingButton>
          {(process.env.AUTHORIZATIONS_FLOWS || '').includes('cognito') && (
            <Button
              type="button"
              component="a"
              target="_blank"
              color="primary"
              variant="contained"
              href={`${process.env.COGNITO_URL}/login?client_id=${process.env.COGNITO_CLIENT_ID}&response_type=${process.env.COGNITO_RESPONSE_TYPE}&redirect_uri=${window.location.origin}/auth/token&scope=${process.env.COGNITO_SCOPE}`}
              className="arrow_button loading_button">
            Log in via Cognito
              <Icon name='arrow_right_alt'/>
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
