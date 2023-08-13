/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
//import { RiDeleteBin6Fill } from 'react-icons/ri';
// eslint-disable-next-line no-unused-vars
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { Checkbox, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'




// eslint-disable-next-line react/prop-types, no-unused-vars
const TodoList = (props) => {

  return (
    <div className='flex flex-row pt-3 pb-3 items-center justify-center bg-gray-200 m-1 rounded-md mb-2 dark:bg-gray-900'>
      <Checkbox onChange={() => props.handleChecked(props.ids)} className='pl-2'></Checkbox>
      <div className='flex flex-row justify-between w-full sm:pr-10 sm:pl-10 pr-3 pl-3 items-center'>
        <p className='text-xl dark:text-gray-100 text-[1rem]'>{props.task}</p>
        <IconButton aria-label='delete list' colorScheme='blue' icon={<DeleteIcon />} onClick={()=>props.deleteTodo(props.ids)} className='dark:text-gray-700 dark:bg-gray-300 bg-gray-900' />
        {/*<RiDeleteBin6Fill className='text-xl text-[#EB4B4B] hover:scale-125' onClick={() => props.deleteTodo(props.ids)} />*/}
      </div>
    </div>
  )
}

export default TodoList