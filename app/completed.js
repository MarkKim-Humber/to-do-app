export default function CompletedTasks({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h2>Completed Tasks</h2>
      {!(completedTasks.length > 0) && <p>No completed tasks yet.</p>}
    </div>
  );
}
