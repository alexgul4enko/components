import { PureComponent } from 'react'
import { LoadingButton } from '../../widgets'
import { withModal } from '../../hocs'

class ClearAll extends PureComponent {
  clearAll = () => {
    this.props.setToggle(true)
      .then(_ => this.props.clearAll())
      .finally(_ => this.props.setToggle(false))
  }
  render() {
    const { disabled, active } = this.props
    return (
      <LoadingButton loading={active} disabled={disabled || active} onClick={this.clearAll} className="notifications_action_button">
        <span className="title_clear_all">Clear all</span>
      </LoadingButton>
    )
  }
}

export default withModal(ClearAll)
