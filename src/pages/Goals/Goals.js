import "./Goals.css";
import {
  getGoal,
  getGoals,
  deleteGoal,
} from "../../services/goals-api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Category from "../../components/Category/Category";
import Footer from "../../layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

/*
 * SMART Process
 *
 * S - Specific --- Goal
 * M - Measurable --- Measurabiltiy
 * A - Achieveable --- Difficulty
 * R - Relevant --- Category
 * T - Time Specific --- Target Date
 */

const Goals = () => {
  const nav = useNavigate()
  const [goals, setGoals] = useState([]);
  const [data, setData] = useState({})

  const remove = async (id) => {
    try {
      await deleteGoal(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGoals()
        .then((res) => setGoals(res.data));
  }, [goals]);

  const handleAnayltics = async (id) => {
    getGoal(id)
      .then(res => setData(res.data))
  }

  return (
    <div className="goals">
      <Navbar />
      <div className="main-content">
        <div className="buttons">
          <button 
            id="new-btn" 
            onClick={() => nav('/create')}
          >
            <FontAwesomeIcon icon={faPlus} className="plus-icon"/>
            Create Goal
          </button>
        </div>

        <div className="active-goals">
          
          

          <div className="goal-list">
            {goals &&
              goals.map((g, i) => {
                return (
                  <div 
                    className="goal-card" 
                    key={i}
                    onClick={() => handleAnayltics(g._id)}
                  >
                    <a><p>{g.goal}</p></a>
                    <Category type={g.category} />
                    <button 
                      className='delete-btn' 
                      type="submit"
                      onClick={() => remove(g._id)}
                    >
                    X
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Goals;
