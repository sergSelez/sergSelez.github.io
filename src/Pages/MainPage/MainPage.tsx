import React, { useState } from 'react'
import { ITask } from '../../interfaces/Task'
import TaskForm from './TaskForm/TaskForm'
import TaskItem from './TaskItem/TaskItem'
import TaskFilter from './TaskFilter/TaskFilter'

export enum FilterType {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed'
}

const MainPage = () => {
  const [inputTaskName, setInputTaskName] = useState<string>('')

  const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL)

  // вынести отдельно
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: 'Тестовое задание', active: true },
    { id: 2, title: 'Прекрасный код', active: false },
    { id: 3, title: 'Покрытие тестами', active: true },
  ])

  const createTask = (event: any) => {
    event.preventDefault()
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

  const amountOfAciveTasks = tasks.filter(task => task.active).length

  return (
    <div className="app">
      <h1 className="title">todos</h1>

      <TaskForm inputTaskName={inputTaskName} setInputTaskName={setInputTaskName} createTask={createTask} />

      {tasks.map(task =>
        <TaskItem key={task.id} task={task} completeTask={completeTask} />
      )}

      <TaskFilter amountOfAciveTasks={amountOfAciveTasks} filterType={filterType} setFilterType={setFilterType} />
    </div>
  );
}

export default MainPage