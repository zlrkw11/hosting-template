import { useState } from "react";

export default function Day() {
  const [dayName, setDayName] = useState("");
  const [tasks, setTasks] = useState(["deadlift", "squat", "lunges"]); // list items
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleInputDayNameChange(e) {
    setDayName(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]); //take current tasks
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index); // filter out the matched ones
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <input
        type="text"
        placeholder="enter day name"
        value={dayName}
        onChange={handleInputDayNameChange}
      ></input>
      <h1>{dayName}</h1>
      <div className="add-bar">
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
