"use client";
import { useState } from "react";
import Tasks from "./tasks";
import Completed from "./completed";
import TaskList from "./components/TaskList";

export default function Home() {
  // States
  const [view, setView] = useState("home");
  const [tasks, setTasks] = useState([
    // Placeholder tasks:
    { id: 1000, text: "Clean dishes", completed: false },
    { id: 1001, text: "CPAN144 Assignment", completed: false },
    { id: 1002, text: "CPAN144 Lab", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  // Add a new task
  const addTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTask, completed: false },
    ]);
    setNewTask("");
  };

  // Mark a task as completed
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  // Filter Completed Tasks
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h1>To-Do List App</h1>
      <nav>
        <ul>
          <li onClick={() => setView("home")}>Home</li>
          <li onClick={() => setView("tasks")}>View Tasks</li>
          <li onClick={() => setView("completed")}>Completed Tasks</li>
        </ul>
      </nav>

      {view === "home" && (
        <div>
          <h2>Welcome to the To-Do List App</h2>
          <p>Use the navigation above to manage your tasks.</p>
        </div>
      )}

      {view === "tasks" && (
        <div>
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
            completeTask={completeTask}
          />
          <TaskList tasks={tasks} completeTask={completeTask} />
        </div>
      )}

      {view === "completed" && (
        <div>
          <Completed tasks={tasks} />
          <TaskList
            // Only passing down the completed tasks
            tasks={completedTasks}
            completeTask={completeTask}
          />
        </div>
      )}
    </div>
  );
}
