import './Calendar.css'
import { useState, useEffect } from "react"

const Calendar = () => {
    const [month, setMonth] = useState('00')
    const [day, setDay] = useState('00')
    const [year, setYear] = useState('0000')

    const setDateLabel = () => {

    }

    useEffect(() => {
        const today = new Date()
        setMonth(today.getMonth() + 1)
        setDay(today.getDate())
        setYear(today.getFullYear())
    }, [])

    return (
        <div className="calendar">
            <div className="tab">
                <h2>{month}</h2>
                <h3>Month</h3>
            </div>
            <div className="tab">
                <h2>{day}</h2>
                <h3>Day</h3>
            </div>
            <div className="tab"> 
                <h2>{year}</h2> 
                <h3>Year</h3>
            </div>
        </div>
    )
}

export default Calendar