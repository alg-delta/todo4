import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);

  const addTask = (task) => {
    // console.log("задача прийнята", task);

    const newTask = {
      id: nanoid(),
      text: task,
      isComplete: false,
    };

    setList((list) => [...list, newTask]);
    console.log(list);
  };

  const deleteTask = (id) => {
    console.log("Видалення", id);
    const newList = list.filter((task) => id !== task.id);
    setList([...newList]);
  };

  const completeTask = (id) => {
    const newList = list.map((task) => {
      if (id === task.id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setList([...newList]);
  };

  return (
    <div className="main">
      <h3 className="title">Список задач</h3>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
      <p className="counter-tasks">Кількість задач: {list.length}</p>
    </div>
  );
}
