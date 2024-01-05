import React from "react";
import { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Поле не повинно бути порожнім!");
      setTask("");
      return;
    }

    if (task.length < 5) {
      alert("Хіба, в тебе є справа коротша ніж 5 символів?");
      setTask("");
      return;
    }
    props.addTask(task);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="Напишіть задачу"
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit" className="btn">
        Додати
      </button>
    </form>
  );
}
