import './NewGoal.css'
import GoalForm from '../GoalForm/GoalForm'


const NewGoal = ({ trigger, setTrigger }) => {
    return (trigger) ? (
        <div className="new-form">
            <div className="goal-content">
                <GoalForm setTrigger={setTrigger}/>
            </div>
        </div>
    ) : ""
}

export default NewGoal