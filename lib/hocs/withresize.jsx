import { Component } from 'react'
import { findDOMNode } from 'react-dom'

export default function withresize(ChildComponent) {
  return class Resizable extends Component {
    constructor(props) {
      super(props)
      this.state = {
        width: 0,
        height: 0,
      }
    }

    resize = () => this.recalculateHeight()

    componentDidMount() {
      this.recalculateHeight()
      window.addEventListener('resize', this.resize)
    }

    componentDidUpdate(prevProps, prevState) {
      this.recalculateHeight()
    }

    recalculateHeight =() => {
      const { width, height } = findDOMNode(this).getBoundingClientRect()
      if(this.state.width !== width && this.state.height !== height) {
        this.setState({ width, height })
      }
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resize)
    }

    render() {
      return <ChildComponent {...this.state}/>
    }
  }
}
