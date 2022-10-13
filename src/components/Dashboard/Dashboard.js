import './Dashboard.css'
import Header from '../Header/Header'

const Dashboard = () => {
    return (
        <div>
            <Header title={'Dashboard'}/>

            <div className='main-content'>
                <div className="navigation">
                    <nav>
                        <a href='/'>Home</a>
                        <a>Profile</a>
                        <a href='/goals'>Goals</a>
                        <a>Journal</a>
                        <a>Settings</a>
                    </nav>
                </div>

                <div className='dash'>
                    <div className='track'>
                        <div className='goal-track'>
                            <p>5 Goals Accomplished</p>
                        </div>
                        <div className='task-track'>
                            <p>70 Tasks Completed</p>
                        </div>
                        <div className='time-track'>
                            <p>6 hours Tracked</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard