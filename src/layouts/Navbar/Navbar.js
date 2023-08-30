import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='navigation'>
            <nav>
                <input type='checkbox' id='check'></input>
                <label htmlFor='check' className='checkbtn'>
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <label className='logo'>HiEffort</label>
                <ul>
                   <li><a href='/dashboard' className='active'>Home</a></li>
                   <li><a>Profile</a></li>
                   <li><a href='/goals'>Goals</a></li>
                   <li><a>About</a></li>
                   <li><a>Contact</a></li> 
                </ul>
            </nav>
        </div>
    )
}

export default Navbar