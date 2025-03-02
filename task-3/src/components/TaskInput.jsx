import React from "react";

function TaskInput({ newTaskTitle, newTaskDescription, setNewTaskTitle, setNewTaskDescription, addTask }) {
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Task Title"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      <button onClick={addTask}>+ Add New</button>
    </div>
  );
}

export default TaskInput;
