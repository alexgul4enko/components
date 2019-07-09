import { PureComponent } from 'react'
import Tree from './Tree'
import isEmpty from 'lodash/isEmpty'

export default class TreeContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      active: this.getInitialActivePage(props),
    }
  }

  getInitialActivePage = (props) => {
    const { data, initialPage } = props
    const activeItem = this.findActive(data, initialPage)
    if(isEmpty(activeItem)) { return [] }
    return [activeItem.uuid]
  }

  findActive(data, currentPage) {
    if(isEmpty(data) || !Array.isArray(data)) { return false }
    return data.find(item => {
      if(item.to === currentPage) { return true }
      return this.findActive(item.children, currentPage)
    })
  }

  checkActive = (uuid) => this.state.active.includes(uuid)

  handleChange = (item) => () => {
    if(isEmpty(item)) { return }
    if(this.state.active.includes(item.uuid)) {
      return this.setState({ active: this.state.active.filter(uuid => uuid !== item.uuid) })
    }
    this.setState({ active: [...this.state.active, item.uuid] }, () => {
      this.props.onOpen && this.props.onOpen(item)
    })
  }

  render() {
    return (
      <Tree
        {...this.state}
        {...this.props}
        checkActive={this.checkActive}
        handleChange={this.handleChange}
        checkHightlight={this.checkHightlight}
      />
    )
  }
}
