import { Fragment } from 'react'
import isEmpty from 'lodash/isEmpty'
import Button from '@material-ui/core/IconButton'
import Icon from '../Icon'

export default function ActionsComponent({ names, selected = [] }) {
  return (
    <div className={`actions_wrapper ${isEmpty(selected) ? 'hidden' : ''}` }>
      <Button><Icon name="delete_outline"/></Button>
      <Button><Icon name="vertical_align_bottom"/></Button>
      <Button><Icon name="more_vert"/></Button>
      {`${selected.length} ${selected.length === 1 ? `${names[0]} on this page is selected` : `${names[1]} on this page are selected`}`}
    </div>
  )
}
