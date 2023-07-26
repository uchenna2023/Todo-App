/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {RiDeleteBin6Fill} from 'react-icons/ri';
// eslint-disable-next-line no-unused-vars
import {ImCheckboxChecked, ImCheckboxUnchecked} from 'react-icons/im';

// eslint-disable-next-line react/prop-types, no-unused-vars
const TodoList = (props) => {
    console.log(props)


  return (
    <div className='flex flex-row pt-3 pb-3 items-center justify-center bg-gray-200 m-1 rounded-md mb-2 dark:bg-gray-900'>
          {props.isCompleted ? <ImCheckboxChecked className='text-[#67f14c] text-xl ml-3 dark:text-gray-100' onClick={()=>props.handleChecked(props.ids)}/> : <ImCheckboxUnchecked className='text-[#2B2A2A] text-xl ml-3 dark:text-gray-100' onClick={()=>props.handleChecked(props.ids)}/>}
          <div className= 'flex flex-row justify-between w-full pr-10 pl-10 items-center'>
            <p className='text-xl dark:text-gray-100'>{props.task}</p>
            <RiDeleteBin6Fill className='text-xl text-[#EB4B4B]' onClick={()=> props.deleteTodo(props.ids)}/>
          </div>
        </div>
  )
}

export default TodoList