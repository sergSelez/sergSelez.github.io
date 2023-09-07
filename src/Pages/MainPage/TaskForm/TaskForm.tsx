import React from 'react'
import classes from './TaskForm.module.scss'

interface ITaskFormProps {
  inputTaskName: string,
  setInputTaskName: React.Dispatch<React.SetStateAction<string>>,
  createTask: (event: React.FormEvent<HTMLButtonElement>) => void,
}

const TaskForm: React.FC<ITaskFormProps> = ({inputTaskName, setInputTaskName, createTask}) => {  
  return (
    <form>
      <input 
        className={classes.form}
        placeholder='What needs to be done?' 
        value={inputTaskName} 
        onChange={event => setInputTaskName(event.target.value)}
      />
      <button className={classes['form-btn']} onClick={createTask}>Create ToDo</button>
    </form>
  )
}

export default TaskForm