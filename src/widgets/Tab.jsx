import { NavLink } from '../router/Links'
import { withStyles } from '../theme'
import get from 'lodash/get'

function Tab({ to, className, title, branding }) {
  return (
    <NavLink
      to={to}
      className={`tabs_navigation_link ${className}`}
      style={{ color: get(branding, 'link_colour') }}
    >
      {title}
      <div className="tabs_navigation_divider" style={{ backgroundColor: get(branding, 'link_colour') }}/>
    </NavLink>
  )
}

export default withStyles(Tab)
