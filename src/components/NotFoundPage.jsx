import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <h1>Page Not Found, Try again 🤷‍♂️</h1>
        <Link to="/">Back to Home</Link>
    </div>
  )
}

export default NotFoundPage