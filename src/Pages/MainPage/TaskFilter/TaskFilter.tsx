import React from 'react'
import { FilterType } from '../MainPage'

const TaskFilter = ({setFilterType, filterType, amountOfAciveTasks}: any) => {
  const changeFilter = (filterType: FilterType) => {
    setFilterType(filterType)
  }

  const buttons = [
    {id: 1, text: 'All', value: FilterType.ALL},
    {id: 2, text: 'Active', value: FilterType.ACTIVE},
    {id: 3, text: 'Completed', value: FilterType.COMPLETED},
  ]

  return (
    <div className='filter'>
      <div className='filter-count'>{amountOfAciveTasks} items left</div>
      <div className='filter-buttons'>
        {buttons.map(button => 
          <button 
            key={button.id} 
            className={`button ${filterType === button.value ? 'active' : null} `} 
            onClick={() => changeFilter(button.value)}
            >{button.text}
          </button>
        )}
      </div>
      <button className='button'>Clear completed</button>
    </div>
  )
}

export default TaskFilter