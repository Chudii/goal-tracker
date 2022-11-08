import "./Goals.css";
import {
  getGoal,
  getGoals,
  deleteGoal,
} from "../../services/goals-api";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import NewGoal from "../NewGoal/NewGoal";
import Analytics from "./Analytics/Analytics";
import Footer from "../Footer/Footer";

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
  const [data, setData] = useState({})

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
              onClick={() => setFormPopup(true)}
            >
              Create New Goal
            </button>
            <button>
              Add New Task
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
                    <form onSubmit={(evt) => remove(evt, g._id)}>
                      <button className='delete-btn' type="submit">X</button>
                    </form>
                  </div>
                );
              })}
          </div>
        </div>

        <Analytics data={data}/>
      </div>

      <Footer />
      <NewGoal trigger={formPopup} setTrigger={setFormPopup} />
    </div>
  );
};

export default Goals;
