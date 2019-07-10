import { Toolbar } from '../errors'

export default function SessionLayout({ children }) {
  return (
    <main className="session_layout">
      <header> <div className="applogo"/></header>
      <div className="main">
        {children}
      </div>
      <Toolbar/>
    </main>
  )
}
