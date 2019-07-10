import { Component } from 'react'
import { compose } from 'redux'
import CognitoToken from './CognitoToken'
import { withGlobalError } from '../../errors'
import { parseQueryParams } from '../../utils/queryParams'
import connect from '../../utils/resource'
import cognitoHOC from './session'

class CognitoTokenContainer extends Component {
  handleAnimationEnd = () => {
    const { code } = parseQueryParams(window.location.search)
    if(!code) {
      return this.props.show({ message: 'code is missing', type: 'error' })
    }
    this.props.login(code)
      .then(data => this.props.user.fetch())
      .catch(err => this.props.show({ message: 'something is wrong', type: 'error' }))
  }

  render() {
    return (
      <CognitoToken
        handleAnimationEnd={this.handleAnimationEnd}
        {...this.props}
      />
    )
  }
}


export default compose(
  connect([{
    namespace: 'user',
    endpoint: 'users/me',
  }]),
  withGlobalError,
  cognitoHOC,
)(CognitoTokenContainer)
