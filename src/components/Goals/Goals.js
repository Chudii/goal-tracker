import "./Goals.css";
import {
  createGoal,
  getGoals,
  deleteGoal,
  editGoal,
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

  // const edit = async (evt, id) => {
  //   setFormPopup(true);
  //   const updatedGoal = {
  //     goal: goal,
  //     measurability: measurability,
  //     difficulty: difficulty,
  //     category: category,
  //     targetDate: targetDate,
  //     reason: reason,
  //   };

  //   try {
  //     await editGoal(id, updatedGoal);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
          <div>
            {goals &&
              goals.map((g, i) => {
                return (
                  <div key={i}>
                    <a href={`/goals/${g._id}`}><p>{g.goal}</p></a>
                    <form onSubmit={(evt) => remove(evt, g._id)}>
                      {/* <button type="button" onClick={(evt) => edit(evt, g)}>
                        EDIT
                      </button> */}
                      <br></br>
                      <button type="submit">X</button>
                    </form>
                  </div>
                );
              })}
          </div>

          <button onClick={() => setFormPopup(true)}>Create New Goal</button>
          <NewGoal trigger={formPopup} setTrigger={setFormPopup} />
        </div>
      </div>
    </div>
  );
};

export default Goals;
