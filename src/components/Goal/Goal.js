import './Goal.css'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getGoal } from '../../services/goals-api'

const Goal = () => {
    const nav = useNavigate()
    const { id } = useParams()
    const [goal, setGoal] = useState({})

    useEffect(() => {
        getGoal(id)
            .then(res => setGoal(res.data))
    }, [])

    const remove = async (evt) => {
        try {
          await deleteGoal(id);
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
            <h3>Goal:</h3>
            <p></p>
            <button onClick={remove}>Delete</button>
        </div>
    )
}

export default Goal