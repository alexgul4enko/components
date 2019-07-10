import { Component } from 'react'
import { Icon, LoadingButton } from '../../../widgets'
import { withModal } from '../../../hocs'
import Button from '@material-ui/core/IconButton'

class ActionButton extends Component {
  handlePress = (event) => {
    event.stopPropagation()
    event.preventDefault()
    this.props.toggle()
      .then(() => this.props.onClick())
      .finally(() => this.props.toggle())
  }
  render() {
    const { name, color, info, active, disabled } = this.props
    return (
      <LoadingButton
        onClick={this.handlePress}
        loading={active}
        disabled={!!disabled}
        size={20}
        loadingColor="primary"
        ButtonComponent={Button}
      >
        <Icon name={name} color={color} size={24}/>
        <span style={{ color }} className="desc">{info}</span>
      </LoadingButton>
    )
  }
}

export default withModal(ActionButton)
