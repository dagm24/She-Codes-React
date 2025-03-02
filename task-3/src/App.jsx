import React, { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const addTask = () => {
    if (newTaskTitle.trim() !== "" && newTaskDescription.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTaskTitle, description: newTaskDescription },
      ]);
      setNewTaskTitle("");
      setNewTaskDescription("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-app">
      <Header />
      <TaskInput
        newTaskTitle={newTaskTitle}
        newTaskDescription={newTaskDescription}
        setNewTaskTitle={setNewTaskTitle}
        setNewTaskDescription={setNewTaskDescription}
        addTask={addTask}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
