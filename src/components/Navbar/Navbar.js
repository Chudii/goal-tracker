import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navigation'>
            <div className="top left-corner"></div>
            <div className="top right-corner"></div>
            <div className="bottom right-corner"></div>
            <div className="bottom left-corner"></div>
            
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