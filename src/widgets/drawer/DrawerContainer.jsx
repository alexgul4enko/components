import { Component } from 'react'
import { withModal } from '../../hocs'
import Drawer from './Drawer'

class DrawerContainer extends Component {
  render() {
    return (
      <Drawer
        {...this.props}
      />
    )
  }
}

export default withModal(DrawerContainer)
