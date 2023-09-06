import React from 'react'
import { ITask } from '../../../interfaces/Task'
// import styles from './TaskItem.module.scss'

interface ITaskItemProps {
  task: ITask;
  completeTask: (id: number) => void;
}

const TaskItem = (props: ITaskItemProps) => {
  return (
    <div className='' onClick={() => props.completeTask(props.task.id)}>
      <p className={ props.task.active ? 'task-title' : 'task-title unactive' }>{props.task.title}</p>
    </div>
  )
}

export default TaskItem