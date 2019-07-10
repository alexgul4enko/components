import Grid from '@material-ui/core/Grid'
import { Icon } from '../../widgets'

export default function AppItem({ icon, title, to, disabled }) {
  return (
    <Grid item xs={12} sm={4} md={3} className={`apps_grid_item  ${disabled && 'disabled'}`}>
      <a
        href={to}
        disabled={disabled}
        className={`link-style ${disabled && 'disabled'} hover_shadow_animation`}>
        <Icon name={icon} className="icon"/>
        <p className="app-title">{title}</p>
      </a>
    </Grid>
  )
}
