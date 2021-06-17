import React from "react";
import "./style.css";



const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={
<<<<<<< HEAD
                    `tasks__item ${task.done && hideDone ? 
                        " tasks__item--hidden" : ""}`
=======
                    `tasks__item ${task.done && hideDone ?
                        "tasks__item--hidden" : ""}`
>>>>>>> c7ff246711a819261f7618d70216eb6e3bcb829d
                }>
                <button
                    className="tasks__button tasks__button--toggleDone"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={
                    `tasks__content ${task.done ? " tasks__content--done" : ""}`
                }>
                    {task.id} - {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🧺
            </button>
            </li>
        ))}
    </ul>
);

export default Tasks;

