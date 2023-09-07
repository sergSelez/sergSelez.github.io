import React from 'react'
import { ITask } from '../../../interfaces/Task'
import classes from './TaskItem.module.scss'

interface ITaskItemProps {
  task: ITask;
  completeTask: (id: number) => void;
}

const TaskItem = ({task, completeTask}: ITaskItemProps) => {
  return (
    <div 
      className={`${classes.task} ${!task.active ? classes.unactive : ''}`} 
      onClick={() => completeTask(task.id)}
    >
      {task.title}
      {/* <p className={`${classes['task-title']} ${!task.active ? classes.unactive : ''}`}>{task.title}</p> */}
    </div>
  )
}

export default TaskItem