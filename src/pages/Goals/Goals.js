import "./Goals.css";
import {
  getGoal,
  getGoals,
  deleteGoal,
} from "../../services/goals-api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faScroll } from "@fortawesome/free-solid-svg-icons";
import Goal from "../../components/Goal/Goal";

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

  useEffect(() => {
    getGoals()
        .then((res) => setGoals(res.data));
  }, [goals]);

  return (
    <div className="goals">
      <Navbar />
      <div className="main-content">
        <div className="buttons">
          <button 
            id="new-btn" 
            onClick={() => nav('/create')}
          >
            <FontAwesomeIcon 
              icon={faPlus}
              className="icon"
            />
            Create Goal
          </button>

          <button
            id="completed-goals"
          >
            <FontAwesomeIcon 
              icon={faScroll}
              className="icon"  
            />
            Completed
          </button>
        </div>

        <div className="active-goals">
          <div className="goal-list">
            {goals &&
              goals.map((g, i) => {
                return (
                  <Goal 
                    key={i}
                    id={g._id}
                    goal={g.goal}
                    difficulty={g.difficulty}
                    date={g.targetDate}
                    category={g.category}
                  />
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
