import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState(["Do Homework", "Clean Room", "Wash Clothes"]);
  const [newTask, setNewTask] = useState("");

  function handleNewTask(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveup(index) {
    if (index > 0) {
      const updatedtask = [...tasks];
      [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]];
      setTasks(updatedtask);
    }
  }

  function movedown(index) {
    if (index < tasks.length - 1) {
      const updatedtask = [...tasks];
      [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]];
      setTasks(updatedtask);
    }
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="contents">
        <div className="input-section">
          <input
            type="text"
            id="input"
            placeholder="Enter your task"
            value={newTask}
            onChange={handleNewTask}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div className="cards">
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <button className="delete-button" onClick={() => handleDelete(index)}>
                  delete
                </button>
                <button className="move-button" onClick={() => moveup(index)}>
                  <i className="fa-solid fa-angle-up"></i>
                </button>
                <button className="move-button" onClick={() => movedown(index)}>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
