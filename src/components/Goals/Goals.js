import './Goals.css'
import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Popup from '../Popup/Popup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/*
 * SMART Process 
 * 
 * S - Specific
 * M - Measurable
 * A - Achieveable
 * R - Relevant
 * T - Time Specific
 */

const Goals = () => {
    const [formPopup, setFormPopup] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [sValue, setSValue] = useState('')
    const [mValue, setMValue] = useState('')
    const [aValue, setAValue] = useState('')
    const [rValue, setRValue] = useState('') 
    const [tValue, setTValue] = useState('')
    const [reason, setReason] = useState('')
    
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
                                    <option>Select Option</option>
                                    <option>Very Easy</option>
                                    <option>Easy</option>
                                    <option>Moderate</option>
                                    <option>Hard</option>
                                    <option>Insane</option>
                                </select>
                                
                                <label>How does this goal align with my life?</label>
                                <select>
                                    <option>Select Option</option>
                                    <option>Lifestyle</option>
                                    <option>Work</option>
                                    <option>Fitness</option>
                                    <option>Hobby</option>
                                    <option>Finances</option>
                                    <option>Project</option>
                                </select>

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