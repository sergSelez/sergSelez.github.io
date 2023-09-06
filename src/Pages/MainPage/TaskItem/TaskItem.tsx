import React from 'react'
import { ITask } from '../../../interfaces/Task'

interface ITaskItemProps {
  task: ITask;
  completeTask: (id: number) => void;
}

const TaskItem = ({task, completeTask}: ITaskItemProps) => {
  return (
    <div className='task' onClick={() => completeTask(task.id)}>
      <p className={`task-title ${!task.active ? 'unactive' : null}`}>{task.title}</p>
    </div>
  )
}

export default TaskItem