import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faHome, faUser, faSuitcase} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logo-full" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/j%C3%B8rn-erlend-wangensteen-larsen-9633aa20/">
                    <FontAwesomeIcon icon ={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/jorlar">
                    <FontAwesomeIcon icon ={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://facebook.com/joern.larsen">
                    <FontAwesomeIcon icon ={faFacebook} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>

    )

export default Sidebar;