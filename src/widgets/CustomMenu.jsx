import { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { withModal } from 'common/hocs'


class MenuListComposition extends PureComponent {
  constructor(props){
    super(props)
    this.state {}
  }
  handleClose = event => !this.state.anchorEl.contains(event.target) && this.props.setToggle(false)

  handleItemSelect = () => {
    this.props.setToggle(false)
    this.props.onSelect()
  }

  render() {
    const { classes, toggle, active, children, items } = this.props
    return (
      <div className="custom_menu">
        <Button
          buttonRef={anchorEl => this.setState({ anchorEl })}
          aria-owns={active ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={toggle}
        >
          {children}
        </Button>
        <Popper open={active} anchorEl={this.state.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList className="custom_menu_list">
                    {items.map((title) => (
                      <MenuItem key={title} onClick={this.handleItemSelect}>{title}</MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    )
  }
}

export default withModal(MenuListComposition)
