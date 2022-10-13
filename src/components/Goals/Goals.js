import './Goals.css'
import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Popup from '../Popup/Popup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Goals = () => {
    const [formPopup, setFormPopup] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div className="goals">
            <Header title={'Goals'}/>

            <div className='main-content'>
                <Navbar />

                <div className='active-goals'>
                    <button onClick={() => setFormPopup(true)}>Create New Goal</button>
                    <Popup trigger={formPopup} setTrigger={setFormPopup}>
                        <div className='form-popup'>
                            <form>
                                <p>Add New Goal</p>

                                <label>What goal am I committing to?</label>
                                <input type='text'/>

                                <label>How will I know I have accomplished this goal?</label>
                                <input type='text'/>

                                <label>How difficult is this goal?</label>
                                <select>
                                    <option>Very Easy</option>
                                    <option>Easy</option>
                                    <option>Moderate</option>
                                    <option>Hard</option>
                                    <option>Insane</option>
                                </select>
                                
                                <label>How does this goal align with my life?</label>
                                <input type='text' />

                                <label>When do I plan on achieving this goal?</label>
                                <DatePicker 
                                    selected={selectedDate} 
                                    onChange={date => setSelectedDate(date)}
                                    minDate={new Date()}
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                />

                                <label>Why do I want to achieve this goal?</label>
                                <input type='text'/>

                                <button id='form-btn' type='submit'>Add Goal</button>
                            </form>
                        </div>
                    </Popup>
                </div>
                
            </div>
        </div>
    )
}

export default Goals