import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Icon from '../Icon'

export default function ExpansionComponent(props) {
  const { active, children, renderItem, handleChange, canBeToggled } = props
  return (
    <ExpansionPanel
      className="custom_tree"
      expanded={active}
      onChange={handleChange(props)}
      classes={{ expanded: 'active', disabled: 'disabled' }}
      disabled={!canBeToggled}
    >
      <ExpansionPanelSummary
        className="tree_title"
        expandIcon={
          <Icon name={`keyboard_arrow_down ${!canBeToggled && 'disabled'}`}/>
        }
      >
        {renderItem(props)}
      </ExpansionPanelSummary>
      {children && (<ExpansionPanelDetails className="tree_data">{children}</ExpansionPanelDetails>)}
    </ExpansionPanel>
  )
}
