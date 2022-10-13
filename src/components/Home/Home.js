import './Home.css'
import Calendar from '../Calendar/Calendar'
import Header from '../Header/Header'

const Home = () => {
    return (
        <div className='home'>
            <Header title={'Goal Tracker'} />

            <Calendar />

            <div className='info'>
                <p>
                Do you have goals you want to accomplish?
                <br></br>
                With this goal tracker you can log all your goals, track your progress, and reflect on your journey. 
                Click the button below to head to the Goal Dashboard and good luck tackling your goals.
                </p>
            </div>
            <a href='/dashboard'>
                <button id='new-goal'>Goal Dashboard</button>
            </a>
            
        </div>
    )
}

export default Home