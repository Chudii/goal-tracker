import './Dashboard.css'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    return (
        <div>
            <Header title={'Dashboard'}/>

            <div className='main-content'>
                <Navbar />

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
                    
                    <div className='activity-chart'>
                        <h3>Activity Chart</h3>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard