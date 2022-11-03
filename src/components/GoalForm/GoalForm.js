import { useEffect, useState } from "react"
import { editGoal, getGoal, createGoal } from "../../services/goals-api"
import DatePicker from 'react-datepicker'

const GoalForm = ({ setTrigger, data }) => {
    const [goalData, setGoalData] = useState(data)

    const [goal, setGoal] = useState(data.goal || '')
    const [measurability, setMeasurability] = useState(data.measurability || '')
    const [difficulty, setDifficulty] = useState(data.difficulty || 0)
    const [category, setCategory] = useState(data.category || '') 
    const [targetDate, setTargetDate] = useState(new Date())
    const [reason, setReason] = useState(data.reason || '')

    const create = async (evt) => {
        const newGoal = {
            goal: goal,
            measurability: measurability,
            difficulty: difficulty,
            category: category,
            targetDate: targetDate,
            reason: reason
        }

        try {
            await createGoal(newGoal)
            setTrigger(false)
        } catch (err) {
            console.log(err)
        }
    }

    const edit = async (id) => {
        const updatedGoal = {
            goal: goal,
            measurability: measurability,
            difficulty: difficulty,
            category: category,
            targetDate: targetDate,
            reason: reason,
        }

        try {
            await editGoal(id, updatedGoal)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="goal-form">
            <div className="form-content">
                <div className='form-popup'>
                    <form onSubmit={data ? create : edit()}>
                        <p>Add New Goal</p>

                        <label>What goal am I committing to?</label>
                        <input 
                            type='text' 
                            name='goal'
                            value={goal}
                            onChange={evt => setGoal(evt.target.value)}
                        />

                        <label>How will I know I have accomplished this goal?</label>
                        <input 
                            type='text' 
                            name='measurability'
                            value={measurability}
                            onChange={evt => setMeasurability(evt.target.value)}
                        />

                        <label>How difficult is this goal?</label>
                        <select 
                            name='difficulty'
                            value={difficulty}
                            onChange={evt => setDifficulty(evt.target.value)}
                        >
                            <option>-- Select Option --</option>
                            <option value={1}>Very Easy</option>
                            <option value={2}>Easy</option>
                            <option value={3}>Moderate</option>
                            <option value={4}>Hard</option>
                            <option value={5}>Insane</option>
                        </select>
                        
                        <label>How does this goal align with my life?</label>
                        <select 
                            name='category'
                            value={category}
                            onChange={evt => setCategory(evt.target.value)}
                        >
                            <option>-- Select Option --</option>
                            <option value='lifestyle'>Lifestyle</option>
                            <option value='work'>Work</option>
                            <option value='fitness'>Fitness</option>
                            <option value='hobby'>Hobby</option>
                            <option value='finances'>Finances</option>
                            <option value='project'>Project</option>
                        </select>

                        <label>When do I plan on achieving this goal?</label>
                        <DatePicker 
                            name='targetDate'
                            selected={targetDate} 
                            onChange={date => setTargetDate(date)}
                            minDate={new Date()}
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />

                        <label>Why do I want to achieve this goal?</label>
                        <input 
                            type='text' 
                            name='reason'
                            value={reason}
                            onChange={evt => setReason(evt.target.value)}  
                        />

                        <button id='form-btn' type='submit'>Add Goal</button>
                    </form>

                    <button type='button' className="close-btn" onClick={() => setTrigger(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default GoalForm