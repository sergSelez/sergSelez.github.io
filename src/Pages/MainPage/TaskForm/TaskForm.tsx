import React from 'react'

interface ITaskFormProps {
  inputTaskName: string,
  setInputTaskName: React.Dispatch<React.SetStateAction<string>>,
  createTask: (event: React.FormEvent<HTMLButtonElement>) => void,
}

const TaskForm: React.FC<ITaskFormProps> = ({inputTaskName, setInputTaskName, createTask}) => {  
  return (
    <form>
      <input 
        className='task-form'
        placeholder='What needs to be done?' 
        value={inputTaskName} 
        onChange={event => setInputTaskName(event.target.value)}
      />
      <button onClick={createTask}>Create</button>
    </form>
  )
}

export default TaskForm