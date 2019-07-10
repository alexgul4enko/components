import Grow from '@material-ui/core/Grow'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { useState, Component } from 'react'

export default class CustomGrow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animated: false,
    }
  }

  close = () => this.setState({ animated: false })

  setAnimated = (animated) => this.setState({ animated })

  render() {
    const { children, active, onClose, className, AnimationElement = Grow, wrapperClass, closeOnOutsideClick = true } = this.props
    return (
      <AnimationElement
        in={this.state.animated}
        onExited={onClose}
        className={className}
      >
        <div>
          {active && <AnimatedChildren setAnimated={this.setAnimated} wrapperClass={wrapperClass} closeOnOutsideClick={closeOnOutsideClick}>{children}</AnimatedChildren>}
        </div>
      </AnimationElement>
    )
  }
}


class AnimatedChildren extends Component {
  render() {
    return (
      <ClickAwayListener
        onClickAway={this.close}
        mouseEvent={this.props.closeOnOutsideClick && 'onClick'}
        touchEvent={this.props.closeOnOutsideClick && 'onTouchStart'}
      >
        <div className={this.props.wrapperClass}>
          {this.props.children}
        </div>
      </ClickAwayListener>
    )
  }

  close = () => this.props.setAnimated(false)

  componentDidMount() {
    this.props.setAnimated(true)
  }
}
