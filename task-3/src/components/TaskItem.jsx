import React from "react";

function TaskItem({ task, deleteTask }) {
  return (
    <li className="task-item">
      <div>
        <strong>{task.title}</strong>
        <p>{task.description}</p>
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
