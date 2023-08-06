/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const ListCount = (props) => {
    return (
        <div className='flex flex-row items-center justify-between  bg-gray-300 mt-10 pt-3 pb-3 pl-5 pr-5 rounded-md m-1 dark:bg-gray-900 dark:text-blue-50'>
            <p>{props.count} {props.count > 1 ? 'items' : 'item'}</p>
            <button>Clear Completed</button>
        </div>
    )
}

export default ListCount