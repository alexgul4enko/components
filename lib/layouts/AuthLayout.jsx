import Header from './Header'
import { Toolbar } from '../errors'

export default function AppLayout({ children }) {
  return (
    <div className="wrapper">
      <Header><div className="applogo"/></Header>
      <div className="main">
        {children}
      </div>
      <Toolbar/>
    </div>
  )
}
