import { Component } from 'react'
import { parseQueryParams } from '../utils/queryParams'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import Loading from '../widgets/Loading'

export default function PrefetchLists(resourceKey) {
  return function resourcesHOC(ChildComponent) {
    return class PrefetchListsHOC extends Component {
      componentDidMount() {
        this.props[resourceKey].fetch({ offset: 0, limit: 25, ...parseQueryParams(get(this.props, 'location.search', '')) })
      }
      render() {
        const initialLoading = get(this.props, `${resourceKey}.isLoading`) && isEmpty(get(this.props, `${resourceKey}.data`))
        return (
          <Loading isLoading={initialLoading}>
            <ChildComponent {...this.props}/>
          </Loading>
        )
      }
    }
  }
}
