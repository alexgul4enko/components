import AppItem from './AppItem'
import Grid from '@material-ui/core/Grid'

export default function Apps({ data }) {
  return (
    <div className="apps_page">
      <div className="wrap-apps">
        <h1 className="title">Apps to supercharge your enterprise intranet</h1>
        <h2 className="subtitle">Invotra Apps</h2>
        <Grid
          container
          alignItems="center"
          spacing={16}>
          {
            data.map(({ title, ...rest }) => (
              <AppItem
                key={title}
                title={title}
                {...rest}
              />
            ))
          }
        </Grid>
      </div>
    </div>
  )
}
