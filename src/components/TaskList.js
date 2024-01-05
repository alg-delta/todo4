import React from "react";

export default function TaskList(props) {
  return (
    <ul className="list">
      {props.list.map((item) => (
        <li key={item.id} className="task">
          <p
            className={item.isComplete ? "complete" : "notcomplete"}
            onClick={() => props.completeTask(item.id)}
          >
            {item.text}
          </p>
          <button className="btn" onClick={() => props.deleteTask(item.id)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
