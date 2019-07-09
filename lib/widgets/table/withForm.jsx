import { Component } from 'react'
import { withModal } from '../../hocs'

export default function withForm(ChildComponent) {
  return class FormRowHOC extends Component {
    constructor(props) {
      super(props)
      this.state = {
        active: false,
        present: false,
      }
    }

    close = () => new Promise((resolve, reject) => {
      this.setState({ active: false }, resolve)
    })

    open = () => new Promise((resolve, reject) => {
      this.setState({ active: true, present: true }, resolve)
    })

    onExited = () => new Promise((resolve, reject) => {
      this.setState({ present: false }, resolve)
    })

    render() {
      return (
        <ChildComponent
          {...this.props}
          {...this.state}
          onExited={this.onExited}
          open={this.open}
          close={this.close}
        />
      )
    }
  }
}
