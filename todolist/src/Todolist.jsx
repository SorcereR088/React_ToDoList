import React, {useState}from "react";

function Todolist(){

    const[tasks, setTasks] = useState(["Eat Breakfast", "Clean Room", "Wash Clothes"]);
    const[newTask, setNewTask] = useState("");

    function handleNewTask(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        const newtask = document.getElementById("input").value;
        setTasks(t => [...t, newtask]);
    }

    function handleDelete(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

    return(
        <div>
            <h1>To Do List</h1>
            <input type="text" id="input" placeholder="Enter your task"
            value={newTask} onChange={handleNewTask}/>
            <button onClick={addTask}>Add</button>

            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span>{task}</span>
                    <button onClick={() => handleDelete(index)}>delete</button>
                </li>) }
            </ol>
        </div>
    );
}

export default Todolist