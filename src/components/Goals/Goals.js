import "./Goals.css";
import {
  getGoal,
  getGoals,
  deleteGoal,
} from "../../services/goals-api";
import { useState, useEffect } from "react";
import Header from "../../layouts/Header/Header";
import Navbar from "../../layouts/Navbar/Navbar";
import NewGoal from "../NewGoal/NewGoal";
import Category from "./Category/Category";
import Footer from "../../layouts/Footer/Footer";

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
  const [goals, setGoals] = useState([]);
  const [goalPopup, setGoalPopup] = useState(false)
  const [taskPopup, setTaskPopup] = useState(false)
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
      <Header title={"Goals"} />

      <div className="main-content">
      
        <Navbar />

        <div className="active-goals">
          <div className="board-title">
            <p>ACTIVE GOALS</p>
          </div>
          <div className="buttons">
            <button 
              id="new-btn" 
              onClick={() => setGoalPopup(true)}
            >
              Create New Goal
            </button>
          </div>
          

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
      <NewGoal trigger={goalPopup} setTrigger={setGoalPopup} />
    </div>
  );
};

export default Goals;
