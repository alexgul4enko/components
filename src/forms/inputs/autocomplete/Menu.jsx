import Paper from '@material-ui/core/Paper'

export default function Menu({ innerProps, children }) {
  return (
    <Paper square className="autocoplete-menu" {...innerProps}>{children}</Paper>
  )
}
