import { Component } from 'react'
import LoginScreen from './LoginScreen'

export default class LoginScreenContainer extends Component {
  handleAnimationEnd = () => window.location.replace(`${process.env.COGNITO_URL}/login?client_id=${process.env.COGNITO_CLIENT_ID}&response_type=${process.env.COGNITO_RESPONSE_TYPE}&redirect_uri=${window.location.origin}/auth/token&scope=${process.env.COGNITO_SCOPE}`)

  render() {
    return (<LoginScreen handleAnimationEnd={this.handleAnimationEnd}/>)
  }
}
