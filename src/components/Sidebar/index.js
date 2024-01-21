import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={ LogoS } alt="logo" />
                <img className='sub-logo' src={ LogoSubtitle } alt="pavan" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassName="active" to="/" >
                    <FontAwesomeIcon icon={ faHome } color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassName="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={ faUser } color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact" >
                    <FontAwesomeIcon icon={ faEnvelope } color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/c-s-pavan-sai-6b100a217" >
                        <FontAwesomeIcon icon={ faLinkedin } color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/psai6274" >
                        <FontAwesomeIcon icon={ faGithub } color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar