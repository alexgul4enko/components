import { Component } from 'react'

export default function withModal(ChildComponent) {
  return class MadalWrapper extends Component {
    constructor(props) {
      super(props)
      this.state = {
        active: !!props.active,
      }
    }

    toggle = (event) => {
      event && event.preventDefault && event.preventDefault()
      event && event.stopPropagation && event.stopPropagation()
      return new Promise((resolve, reject) => {
        this.setState({ active: !this.state.active }, resolve)
      })
    }

    setToggle = (active) => {
      return new Promise((resolve, reject) => {
        this.setState({ active }, resolve)
      })
    }


    render() {
      return (<ChildComponent {...this.props} {...this.state} toggle={this.toggle} setToggle={this.setToggle} />)
    }
  }
}
