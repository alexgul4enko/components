import { PureComponent } from 'react'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import LoginForm from './LoginForm'
import connectResources from '../../utils/resource'
import { withGlobalError } from '../../errors'

class LoginFormContainer extends PureComponent {
  onSubmit = (params, dispatch) => {
    return this.props.user.create(params)
      .then(_ => this.props.user.fetch({}, { endpoint: 'users/me', dataFunction: 'replace' }))
      .catch(message => {
        this.props.show({ message: 'check your login or password', type: 'error' })
        throw new Error(message)
      })
  }
  render() {
    return <LoginForm {...this.props} handleSubmit={this.props.handleSubmit(this.onSubmit)}/>
  }
}


export default compose(
  connectResources([{
    namespace: 'user',
    endpoint: 'sessions/login',
    dataFunction: 'none',
  }]),
  reduxForm({
    form: 'login',
  }),
  withGlobalError,
)(LoginFormContainer)
