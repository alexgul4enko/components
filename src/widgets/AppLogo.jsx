import { withStyles } from '../theme'
import get from 'lodash/get'

function AppLogo({ branding }) {
  const src = get(branding, 'logo')
  if(!src) { return null }
  return (
    <img className="site_logo" src={src}/>
  )
}

export default withStyles(AppLogo)
