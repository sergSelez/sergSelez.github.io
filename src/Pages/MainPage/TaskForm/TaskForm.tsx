import React from 'react'

interface ITaskFormProps {
  inputTaskName: string,
  setInputTaskName: React.Dispatch<React.SetStateAction<string>>,
  createTask: (event: any) => void,
}

const TaskForm = ({inputTaskName, setInputTaskName, createTask}: ITaskFormProps) => {  
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