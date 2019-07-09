import { Drawer } from '../../widgets'
import Label from './Label'
import Notificatoins from './NotificatoinsContainer'

export default function NotificationsSidebar() {
  return (
    <Drawer Label={Label}>
      <Notificatoins/>
    </Drawer>
  )
}
