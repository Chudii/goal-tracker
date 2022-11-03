import './NewGoal.css'
import DatePicker from 'react-datepicker'
import GoalForm from '../GoalForm/GoalForm'
import { createGoal } from '../../services/goals-api'
import { useState } from 'react'

const NewGoal = ({ trigger, setTrigger }) => {
    return (trigger) ? (
        <div className="new-goal">
            <div className="goal-content">
                <GoalForm setTrigger={setTrigger}/>
            </div>
        </div>
    ) : ""
}

export default NewGoal