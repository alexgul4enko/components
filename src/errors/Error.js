import { Component } from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import { actions } from './globalErrors'
import { connect } from 'react-redux'
import get from 'lodash/get'


class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(get(this.props, 'data.uuid') !== get(prevProps, 'data.uuid') && get(this.props, 'data.message')) {
      this.setState({ active: !!get(this.props, 'data.message') }, () => {
        if(!get(this.props, 'data.message')) { return }
        this.subscription && clearTimeout(this.subscription)
        this.subscription = setTimeout(() => {
          this.setState({ active: false })
          this.subscription = undefined
        }, this.props.duration)
      })
    }
  }

  componentWillUnmount() {
    this.subscription && clearTimeout(this.subscription)
  }

  render() {
    const { message, type } = get(this.props, 'data', {})
    return (
      <Snackbar
        className={`global_error ${type}`}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={this.state.active}
        onClose={() => { this.props.hide() }}
        autoHideDuration={this.props.duration}
        message={<span className="global_error">{message}</span>}
      />
    )
  }
}

Toolbar.defaultProps = {
  duration: 3000,
}

export default connect(({ globalError }) => ({ data: globalError }), actions)(Toolbar)

export function withGlobalError(ChildComponent) {
  return connect(() => ({ }), actions)(ChildComponent)
}
