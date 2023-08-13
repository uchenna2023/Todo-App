import { BsSunFill } from 'react-icons/bs'
import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Buttons from './Buttons';
import ListCount from './ListCount';
import { ChakraProvider } from '@chakra-ui/react'

const FILTER_MAP = {
  All: () => true,
  Active: (item) => item.completed === false,
  Completed: (item) => item.completed === true
}


const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useState(true)
  const [filter, setFilter] = useState('All')
  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState([
    {
      id: 1,
      task: 'cooking',
      completed: false
    },
    {
      id: 2,
      task: 'washing',
      completed: false
    },
    {
      id: 3,
      task: 'Cleaning the bedroom',
      completed: false
    },
    {
      id: 4,
      task: 'Going to the market',
      completed: false
    }

  ]);

  const toggleDark = () => {
    setDarkMode(!darkMode)
  }



  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  const addTodo = () => {

    const newTodo = {
      id: Date.now(),
      task: userInput,
      completed: false
    }
    setList(list.concat(newTodo))
    setUserInput('')

  }

  const deleteTodo = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const handleChecked = (id) => {
    const cloneTodo = [...list]
    setList(cloneTodo.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  }

  const filterArray = Object.keys(FILTER_MAP);
  const filterMap = filterArray.map((name) => (<Buttons key={name} names={name} handleFilter={setFilter} />))
  const newList = list.filter(FILTER_MAP[filter]).map((item, id) => <TodoList deleteTodo={deleteTodo} key={id} ids={item.id} task={item.task} isCompleted={item.completed} handleChecked={handleChecked} />)

  const countFilteredTask = () => {
    if (filter === "All") {
      return list.length;
    } else if (filter === 'Active') {
      return list.filter((item) => !item.completed).length;
    } else if (filter === "Completed") {
      return list.filter((item) => item.completed).length
    }
  }







  return (
    <ChakraProvider>
      <div className={darkMode ? 'dark' : ''}>
      <div className='bg-gray-300 dark:bg-gray-900'>
        <div className="h-64 bg-[url('./assets/logo2.png')] bg-no-repeat bg-cover w-full m-auto bg-transparent"></div>
        <div className="w-full h-64  backdrop-brigthness -mt-60"></div>
        <div className="w-6/12 m-auto -mt-56">
          <div className="flex flex-row justify-between items-center pb-20">
            <h2 className="pr-5 pt-5 text-gray-100 font-bold text-5xl tracking-wider dark:text-gray-300">To-do</h2>
            <BsSunFill className='text-gray-100 text-4xl dark:text-gray-300 hover:scale-125' onClick={toggleDark} />
          </div>
          <Form handle={handleUserInput} userInput={userInput} addTodo={addTodo} />
          <div className="border-4 w-full border-blue-400 rounded-md bg-blue-600 mt-2 pb-2">
            <div className='flex flex-row justify-center gap-2 pt-3 pb-3'>
              {filterMap}
            </div>
            {newList}
            <ListCount count={countFilteredTask()} />

          </div>
        </div>
      </div>
    </div>
    </ChakraProvider>
  )
}

export default App
