/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Buttons = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className='w-2/6 flex justify-center'>
      <button className='bg-gray-300 rounded-sm w-4/6 p-1 text-gray-700 text-[.6rem] sm:text-sm hover:bg-gray-400 hover:text-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:w-24 dark:p-1' onClick={() => props.handleFilter(props.names)}>{props.names}</button>
    </div>
  )
}

export default Buttons;