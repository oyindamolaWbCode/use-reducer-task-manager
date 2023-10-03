import React, { useReducer } from "react";
import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";

// Define initial state
const initialState = {
  tasks: [],
};

// Define action types
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      const updatedTasks = [...state.tasks];
      updatedTasks.splice(action.payload, 1);
      return {
        tasks: updatedTasks,
      };
    default:
      return state;
  }
};

const TaskManager = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Action to add a task
  const addTask = (newTask) => {
    dispatch({ type: ADD_TASK, payload: newTask });
  };

  // Action to delete a task
  const deleteTask = (index) => {
    dispatch({ type: DELETE_TASK, payload: index });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
  
    const taskName = document.getElementById("taskName").value.trim();
    const dueDate = document.getElementById("dueDate").value;

    if (!taskName) {
      alert("Please enter a task name.");
      return;
    }

    if (!dueDate) {
      alert("Please enter a valid due date.");
      return;
    }

    // Create a new task
    const newTask = { name: taskName, dueDate, completed: false };

    // Dispatch the action to add the new task
    addTask(newTask);

    // Clear the input fields on submit
    document.getElementById("taskName").value = "";
    document.getElementById("dueDate").value = "";
  };

  return (

    <div className="tasks">
      <div className="image-">
        <div className="image-margin">
          <div className="headings">
            <span>Hi!, It's a beautiful day and have a good one 🥰</span>
          </div>
          <div className="AddTask">
            <form onSubmit={handleAddTask}>
            <input type="text" id="taskName" placeholder="Write a todo" required />
            <label>Due Date</label>
            <input type="date" id="dueDate" name="trip-start" required />
            <button className="addButton">Add Todo</button>
  </form>
          </div>
        </div>
      </div>
      <div className="OutputTodo">
        <div className="output-list">
        <ul>
          {state.tasks.map((task, index) => (
            <li key={index}
            className={task.completed ? "completed" : ""}>
              <span>
                <p>{task.name}</p>
              </span>
              <div className="flexy">
                <h6>Due on: {task.dueDate}</h6>
                <div className="indicator">
                  <IconContext.Provider value={{ className: "top-react-icons" }}>
                    <span>
                      <button onClick={() => deleteTask(index)} className="butCanc">Delete<RxCross1 className="cancel"/></button>
                    </span>

                  </IconContext.Provider>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
