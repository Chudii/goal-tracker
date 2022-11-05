import "./Goals.css";
import {
  getGoals,
  deleteGoal
} from "../../services/goals-api";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import NewGoal from "../NewGoal/NewGoal";
import "react-datepicker/dist/react-datepicker.css";

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
  const [formPopup, setFormPopup] = useState(false)

  const remove = async (evt, id) => {
    try {
      await deleteGoal(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGoals()
        .then((res) => setGoals(res.data));
  }, []);

  return (
    <div className="goals">
      <Header title={"Goals"} />

      <div className="main-content">
      
        <Navbar />

        <div className="active-goals">
          <div className="top left-corner"></div>
          <div className="top right-corner"></div>
          <div className="bottom right-corner"></div>
          <div className="bottom left-corner"></div>

          <button id="new-btn" onClick={() => setFormPopup(true)}>Create New Goal</button>

          <div className="goal-list">
            {goals &&
              goals.map((g, i) => {
                return (
                  <div className="goal-card" key={i}>
                    <a href={`/goals/${g._id}`}><p>{g.goal}</p></a>
                    <form onSubmit={(evt) => remove(evt, g._id)}>
                      <button type="submit">X</button>
                    </form>
                  </div>
                );
              })}
          </div>

          
          <NewGoal trigger={formPopup} setTrigger={setFormPopup} />
        </div>
      </div>
    </div>
  );
};

export default Goals;
