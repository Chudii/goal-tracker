import './Home.css'
import Calendar from '../Calendar/Calendar'

const Home = () => {
    return (
        <div className='home'>
            <header>
                <h1>Weekly Goal Tracker</h1>
            </header>

            <Calendar />
        </div>
    )
}

export default Home