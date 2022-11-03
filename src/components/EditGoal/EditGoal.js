import { useState, useEffect } from "react"
import GoalForm from "../GoalForm/GoalForm"
import { getGoal } from "../../services/goals-api"

const EditGoal = ({ data, trigger, setTrigger }) => {
    
    return (trigger) ? (
        <div className="new-goal">
            <div className="goal-content">
                <GoalForm data={data} setTrigger={setTrigger}/>
            </div>
        </div>
    ) : ""
}

export default EditGoal