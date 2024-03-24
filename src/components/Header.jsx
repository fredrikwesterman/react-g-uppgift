import { NavLink } from 'react-router-dom'
import Logo from '../img/fredsFoodLogo.png'
import HeaderStyle from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={HeaderStyle.wrapper}>
        <NavLink to='/'><img src={Logo} alt="Freds Food Logo" className={HeaderStyle.logo}/></NavLink>
        <nav>
            <ul className={HeaderStyle.nav}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/categories">Categories</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header