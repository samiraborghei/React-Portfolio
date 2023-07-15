import { Link } from 'react-router-dom'
import './index.scss'
import SamiraL from '../../assets/images/samira-logo.png'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={SamiraL} alt="logo" />
        </Link>
        <nav>
            <navLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </navLink>
            <navLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </navLink> <navLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </navLink> <navLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </navLink>
            <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
            >
                <FontAwesomeIcon icon={faEnveope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/samira-borghei/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/samiraborghei'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar