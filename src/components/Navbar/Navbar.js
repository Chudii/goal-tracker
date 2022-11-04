import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navigation'>
            <nav>
                <a href='/dashboard'>Overview</a>
                <a>Profile</a>
                <a href='/goals'>Goals</a>
                <a>Tasks</a>
                <a>Journal</a>
                <a>Settings</a>
            </nav>
        </div>
    )
}

export default Navbar