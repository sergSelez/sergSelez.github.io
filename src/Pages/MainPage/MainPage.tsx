import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm/TaskForm'
import TaskItem from './TaskItem/TaskItem'
import TaskFilter from './TaskFilter/TaskFilter'

import { ITask } from '../../interfaces/Task'
import { taskList } from '../../data/mockTasks'
import { FilterType } from '../../enums/filterType'

const MainPage = () => {
  const [inputTaskName, setInputTaskName] = useState<string>('')
  const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL)
  const [tasks, setTasks] = useState<ITask[]>(taskList)
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>(tasks)

  useEffect(() => {
    filterTasks()
  }, [filterType])
  
  const amountOfAciveTasks = filteredTasks.filter(task => task.active).length

  const createTask = (event: Event) => {
    event.preventDefault()    

    if (!inputTaskName) return

    const newTask = {
      id: Date.now(),
      title: inputTaskName.trim(),
      active: true,
    }
    setFilteredTasks([ ...filteredTasks, newTask ])
    setInputTaskName('') 
  }

  const completeTask = (id: number) => {
    const result = filteredTasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          active: !task.active
        }
      }
      return task
    }) 
    setFilteredTasks(result)
    // filterTasks()
  }

  const filterTasks = () => {
    if (filterType === FilterType.ALL) {
      return setFilteredTasks(tasks)
    } else {
      const result = [...tasks].filter(task => task.active === !!filterType)
      setFilteredTasks(result)
    }
  }

  const removeUnactiveTasks = () => {

  }

  return (
    <>
      <h1 className="title">todos</h1>

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
      />
    </>
  );
}

export default MainPage