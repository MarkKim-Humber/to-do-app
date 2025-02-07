import TaskItem from './TaskItem';

export default function TaskList({ tasks, completeTask }) {

  return (
    <ul className='taskList'>
      {tasks.map(task => (
          <TaskItem key={task.id} task={task} completeTask={completeTask} />
      ))}
    </ul>
  );
}
