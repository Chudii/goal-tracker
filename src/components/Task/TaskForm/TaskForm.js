

const TaskForm = ({ setTrigger, data }) => {
    return (
        <div className="task-form">
            <div className="form-content">
                <div className="form-popup">
                    <form>
                        <p>Add New Task</p>

                        <label>What is your task?</label>
                        <input
                            type='text'
                            name='title' 
                        />
                    </form>
                    <button type='button' className="close-btn" onClick={() => setTrigger(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default TaskForm