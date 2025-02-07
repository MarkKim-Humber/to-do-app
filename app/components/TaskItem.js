export default function TaskItem({ task, completeTask }) {
  return (
    <>
    {/* Displaying tasks based on whether they are complete or not */}
      {!task.completed ? (
        <li className="taskItem">
          <p>{task.text}</p>
          <button onClick={() => completeTask(task.id)}>Complete</button>
        </li>
      ) : (
        <div>
          <li className="taskItem">
          <p>{task.text}</p>
          <p className="done">Done</p>
        </li>
        </div>
      )}
    </>
  );
}
