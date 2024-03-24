import { NavLink } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <h1>Page Not Found, Try again 🤷‍♂️</h1>
        <NavLink to="/">Back to Home</NavLink>
    </div>
  )
}

export default NotFoundPage