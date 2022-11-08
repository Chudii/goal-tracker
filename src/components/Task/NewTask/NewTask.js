import TaskForm from "../TaskForm/TaskForm";
import './NewTask.css'

const NewTask = ({ trigger, setTrigger }) => {
    return (trigger) ? (
        <div className="new-form">
            <div className="task-content">
                <TaskForm setTrigger={setTrigger}/>
            </div>
        </div>
    ) : ""
}

export default NewTask