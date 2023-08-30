import './Dashboard.css'
import Header from '../../layouts/Header/Header'
import Navbar from '../../layouts/Navbar/Navbar'

const Dashboard = () => {
    return (
        <div>
            <Header title={'Dashboard'}/>

            <div className='main-content'>
                <Navbar />
            </div>
            
        </div>
    )
}

export default Dashboard