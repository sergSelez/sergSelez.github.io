import React from 'react'

const TaskForm = (props: any) => {
  return (
    <form>
      <input 
        className='taskForm'
        placeholder='What needs to be done?' 
        value={props.inputTaskName} 
        onChange={e => props.setInputTaskName(e.target.value)}
      />
      <button onClick={props.createTask}>Create</button>
    </form>
  )
}

export default TaskForm