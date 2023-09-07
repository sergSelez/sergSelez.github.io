import React from 'react'
import { FilterType } from '../../../enums/filterType'
import classes from './TaskFilter.module.scss'

interface ITaskFilterProps {
  filterType: FilterType,
  setFilterType: React.Dispatch<React.SetStateAction<FilterType>>,
  amountOfAciveTasks: number,
  removeUnactiveTasks: () => void
}

const buttons = [
  {id: 1, text: FilterType.ALL, value: FilterType.ALL},
  {id: 2, text: FilterType.ACTIVE, value: FilterType.ACTIVE},
  {id: 3, text: FilterType.COMPLETED, value: FilterType.COMPLETED},
]

const TaskFilter: React.FC<ITaskFilterProps> = ({filterType, setFilterType, amountOfAciveTasks, removeUnactiveTasks}) => {  
  return (
    <div className={classes.filter}>
      <div className={classes['filter-count']}>
        {amountOfAciveTasks} {amountOfAciveTasks === 1 ? 'item' : 'items'} left
      </div>
      <div className={classes['filter-buttons-wrapper']}>
        {buttons.map(button => 
          <button 
            key={button.id} 
            className={`${classes['filter-button']} ${filterType === button.value ? classes.active : ''} `} 
            onClick={() => setFilterType(button.value)}
          >
            {button.text}
          </button>
        )}
      </div>
      <button className={classes['filter-button']} onClick={removeUnactiveTasks}>Clear completed</button>
    </div>
  )
}

export default TaskFilter