import React, { useState } from 'react'
import TaskForm from './TaskForm/TaskForm'
import TaskItem from './TaskItem/TaskItem'
import TaskFilter from './TaskFilter/TaskFilter'

import { ITask } from '../../interfaces/Task'
import { taskList } from '../../data/mockTasks'
import { FilterType } from '../../enums/filterType'

const MainPage: React.FC = () => {
  const [inputTaskName, setInputTaskName] = useState<string>('')
  const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL)
  const [tasks, setTasks] = useState<ITask[]>(taskList)

  const filteredTasks = tasks.filter(task => {
    if(filterType === FilterType.ACTIVE) return task.active
    else if(filterType === FilterType.COMPLETED) return !task.active
    else return true
  })
  
  const amountOfAciveTasks = filteredTasks.filter(task => task.active).length

  const createTask = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()    
    if (!inputTaskName) return

    const newTask = {
      id: Date.now(),
      title: inputTaskName.trim(),
      active: true,
    }
    setTasks([ ...tasks, newTask ])
    setInputTaskName('') 
  }

  const completeTask = (id: number) => {
    const result = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          active: !task.active
        }
      }
      return task
    }) 
    setTasks(result)
  }

  const removeUnactiveTasks = () => {
    const cleanedTasks = tasks.filter(task => task.active)
    setTasks(cleanedTasks)
  }

  return (
    <>
      <h1 className="title">todos</h1>

      <div className='app-wrapper'>
        <TaskForm 
          inputTaskName={inputTaskName} 
          setInputTaskName={setInputTaskName} 
          createTask={createTask} 
        />

        {filteredTasks.map(task =>
          <TaskItem key={task.id} task={task} completeTask={completeTask} />
        )}

        <TaskFilter 
          amountOfAciveTasks={amountOfAciveTasks} 
          filterType={filterType} 
          setFilterType={setFilterType}
          removeUnactiveTasks={removeUnactiveTasks}
        />
      </div>
    </>
  );
}

export default MainPage