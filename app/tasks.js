export default function Tasks({
  tasks,
  setTasks,
  newTask,
  setNewTask,
  addTask,
  completeTask,
}) {
  return (
    <div>
      <h2>To-Do List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          placeholder="Add a Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
