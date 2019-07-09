import { Link } from 'react-router-dom'

// TODO make it pretty
export default function NotFound(props) {
  return (
    <main className="not_found_page">
      <h1>.404</h1>
      <div>
        <p>The page you are trying to reach does not exist, or has been moved.</p>
        <Link className="link" to="/">Go to homepage</Link>
      </div>
    </main>
  )
}
