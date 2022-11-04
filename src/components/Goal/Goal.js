import './Goal.css'
import EditGoal from '../EditGoal/EditGoal'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getGoal, deleteGoal } from '../../services/goals-api'

const Goal = () => {
    const nav = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [formPopup, setFormPopup] = useState(false)

    useEffect(() => {
        getGoal(id)
            .then(res => setData(res.data))
    }, [])

    const remove = async (evt) => {
        try {
          await deleteGoal(id);
          nav('/goals')
        } catch (err) {
          console.log(err);
        }
    }

    return (
        <div>
            <h1>Show Page for Specific Goals</h1>
            <h3>Goal:</h3>
            <EditGoal data={data} trigger={formPopup} setTrigger={setFormPopup} />
            <button type="button" onClick={(evt) => setFormPopup(true)}>EDIT</button>
            <button onClick={remove}>Delete</button>
        </div>
    )
}

export default Goal