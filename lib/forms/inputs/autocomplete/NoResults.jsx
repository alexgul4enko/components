import ListItem from '@material-ui/core/ListItem'
import get from 'lodash/get'

export default function NoResults({ children, selectProps, innerProps }) {
  return (
    <ListItem className="empty_select_data" {...innerProps}>{children}</ListItem>
  )
}
