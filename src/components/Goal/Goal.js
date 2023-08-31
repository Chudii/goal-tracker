import './Goal.css'
import EditGoal from '../EditGoal/EditGoal'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getGoal, deleteGoal } from '../../services/goals-api'
import Category from "../Category/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMountain } from "@fortawesome/free-solid-svg-icons";

const Goal = ({ id, goal, difficulty, date, category }) => {
    const nav = useNavigate()
    const [data, setData] = useState({})

    const remove = async (id) => {
        try {
          await deleteGoal(id);
        } catch (err) {
          console.log(err);
        }
    }

    const populateDiff = (difficulty) => {
        return [...Array(difficulty)].map(i => {
            return (
                <FontAwesomeIcon icon={faMountain}/>
            )
        })
    }

    return (
        <div 
            className="goal-card" 
        >
            <p>{goal}</p>
            <p className='goal-date'>
                By: {new Date(date).getMonth()}/
                {new Date(date).getDate()}/
                {new Date(date).getFullYear()} 
            </p>
            <div className='difficulty'>
                Difficulty: {populateDiff(difficulty)}
            </div>
            <Category type={category} />
            <FontAwesomeIcon 
                icon={faCircleXmark}
                size='lg'
                className='delete-btn'
                onClick={() => remove(id)}
            />
            <button 
                className='complete-btn'>COMPLETE
            </button>
        </div>
    )
}

export default Goal