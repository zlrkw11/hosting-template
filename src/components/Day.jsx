import React, { useState } from "react";

export default function Day() {
  const [dayName, setDayName] = useState("");
  const [tasks, setTasks] = useState(["deadlift", "squat", "lunges"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleInputDayNameChange(e) {
    setDayName(e.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <input
        type="text"
        placeholder="enter day name"
        value={dayName}
        onChange={handleInputDayNameChange}
      ></input>
      <h1>{dayName}</h1>
      <div>
        <input
          type="text"
          placeholder="enter an exercise"
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              move up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              move down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
