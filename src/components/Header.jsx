import { Link } from 'react-router-dom'
import Logo from '../img/fredsFoodLogo.png'
import HeaderStyle from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={HeaderStyle.wrapper}>
        <Link to='/'><img src={Logo} alt="Freds Food Logo" className={HeaderStyle.logo}/></Link>
        <nav>
            <ul className={HeaderStyle.nav}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header