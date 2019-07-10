import { Fragment } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

export default function FeedsSidebar({
  Label,
  toggle,
  active,
  setToggle,
  children,
  containerClass = '',
}) {
  return (
    <Fragment>
      <SwipeableDrawer
        className="custom_drawer"
        open={active}
        onClose={() => setToggle(false)}
        onOpen={() => setToggle(true)}
        anchor="right"
      >
        <div className={`drawer_container ${containerClass}`}>
          {children}
        </div>
      </SwipeableDrawer>
      <Label active={active} className={`drawer_label ${active ? 'toggled' : ''} `} onClick={toggle}/>
    </Fragment>
  )
}
