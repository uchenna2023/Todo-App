// eslint-disable-next-line no-unused-vars
import React from 'react'

const Buttons = (props)=> {
  return (
    // eslint-disable-next-line react/prop-types
    <div className='flex flex-row'><button className='bg-gray-300 w-24 p-1 text-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:w-24 dark:p-1' onClick={()=>props.handleFilter(props.names)}>{props.names}</button></div>
  )
}

export default Buttons;