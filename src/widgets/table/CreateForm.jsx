import { Fragment, cloneElement, createRef } from 'react'
import get from 'lodash/get'
import Icon from '../Icon'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Grow from '../Grow'
import LoadingButton from '../LoadingButton'
import { withModal } from '../../hocs'

function CreateForm({
  addTitle,
  active,
  setToggle,
  dnd,
  selectable,
  FormElement,
}) {
  const collapse = createRef()
  return (
    <Fragment>
      <Button
        className={`add_new_table_row ${dnd ? 'dnd' : ''} ${selectable ? 'selectable' : ''}`}
        onClick={_ => setToggle(true)}
        disableTouchRipple
      >
        <Icon name="add"/>
        {addTitle}
      </Button>
      <Grow
        AnimationElement={Collapse}
        active={active}
        onClose={_ => setToggle(false)}
        ref={collapse}
        wrapperClass={`collapsible_table_form ${dnd ? 'dnd' : ''} ${selectable ? 'selectable' : ''}` }
      >
        <FormElement close={_ => get(collapse, 'current.close')()}/>
      </Grow>
    </Fragment>
  )
}

export default withModal(CreateForm)
