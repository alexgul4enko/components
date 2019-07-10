import { Drawer, LabeledIcon } from '../../widgets'
import Feeds from './FeedsContainer'

export default function FeedsSidebar() {
  return (
    <Drawer Label={FeedsLabel}>
      <Feeds/>
    </Drawer>
  )
}

function FeedsLabel(props) {
  return <LabeledIcon icon="description" label="NEW" {...props} />
}
