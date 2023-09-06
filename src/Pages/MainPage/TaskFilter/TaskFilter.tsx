import React from 'react'
import { FilterName, FilterType } from '../../../enums/filterType'

interface ITaskFilterProps {
  filterType: FilterType,
  setFilterType: React.Dispatch<React.SetStateAction<FilterType>>,
  amountOfAciveTasks: number,
}

const buttons = [
  {id: 1, text: FilterName.ALL, value: FilterType.ALL},
  {id: 2, text: FilterName.ACTIVE, value: FilterType.ACTIVE},
  {id: 3, text: FilterName.COMPLETED, value: FilterType.COMPLETED},
]

const TaskFilter = ({filterType, setFilterType, amountOfAciveTasks}: ITaskFilterProps) => {  
  return (
    <div className='filter'>
      <div className='filter-count'>
        {amountOfAciveTasks} {amountOfAciveTasks === 1 ? 'item' : 'items'} left
      </div>
      <div className='filter-buttons'>
        {buttons.map(button => 
          <button 
            key={button.id} 
            className={`button ${filterType === button.value ? 'active' : null} `} 
            onClick={() => setFilterType(button.value)}
          >
            {button.text}
          </button>
        )}
      </div>
      <button className='button'>Clear completed</button>
    </div>
  )
}

export default TaskFilter