import { Component } from 'react'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import Loading from '../widgets/Loading'

export default function withResources(resouces = []) {
  return function resourcesHOC(ChildComponent) {
    return class Prefetch extends Component {
      componentDidMount() {
        Promise.all([
          resouces.map(key => get(this.props, `[${resouces}].fetch`, () => {})()),
        ])
      }

      isLoading = () => {
        resouces.findIndex(key => isEmpty(get(this.props, `[${resouces}].data`))) !== -1
      }

      render() {
        return (
          <Loading isLoading={this.isLoading()}>
            <ChildComponent {...this.props} />
          </Loading>
        )
      }
    }
  }
}
