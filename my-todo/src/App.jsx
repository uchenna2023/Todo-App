import {BsSunFill} from 'react-icons/bs'
import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Buttons from './Buttons';

const FILTER_MAP = {
  All:()=> true,
  Active:(item)=>item.completed === false,
  Completed: (item)=>item.completed === true
}


const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [filter,setFilter] = useState('All')
  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState([
    {
      id:1,
      task: 'cooking',
      completed:false
    },
    {
      id:2,
      task: 'washing',
      completed:false
    },
    {
      id:3,
      task:'Cleaning the bedroom',
      completed:false
    },
    {
      id:4,
      task:'Going to the market',
      completed:false
    }
    
  ]);



  const handleUserInput = (e)=>{
    setUserInput(e.target.value)
  }

  const addTodo = ()=>{
    
    const newTodo = {
      id: Date.now(),
      task:userInput,
      completed: false
    }
    setList(list.concat(newTodo))
    setUserInput('')

  }

  const deleteTodo = (id)=>{
    setList(list.filter((item)=>item.id !== id))
  }

  const handleChecked = (id)=>{
    const cloneTodo = [...list]
    setList(cloneTodo.map((item)=>(item.id === id ? {...item, completed: !item.completed} : item)));
  }
  
  const filterArray = Object.keys(FILTER_MAP);
  const filterMap = filterArray.map((name)=>(<Buttons key={name} names={name} handleFilter={setFilter}/>))
  //const newList = list.filter(FILTER_MAP[filter]).map((item,id)=><List deleteLi={deleteTodo} key={id} ids={item.id} tasks={item.task} isCompleted={item.completed} isChecked={handleChecked}/>)






  return (
    <div className='bg-gray-400'>
      <div className="h-64 bg-[url('./assets/logo2.png')] bg-no-repeat bg-cover w-full m-auto bg-transparent"></div>
      <div className="w-full h-64  backdrop-brigthness dark:bg-slate-800 -mt-60"></div>
        <div className="w-6/12 m-auto -mt-56">
          <div className="flex flex-row justify-between items-center pb-20">
              <h2 className="pr-5 pt-5 text-gray-100 font-bold text-5xl tracking-wider dark:text-gray-300">TODO</h2>
              <BsSunFill className='text-gray-100 text-4xl dark:text-gray-300'/>
          </div>
          <Form handle={handleUserInput} userInput={userInput} addTodo={addTodo}/>
        <div className="border-4 w-full border-blue-400 rounded-md bg-blue-600 mt-2">
          <div className='flex flex-row justify-center gap-2 pt-3 pb-3'>
          {filterMap}
          </div>
        
        {list.map((e)=> <TodoList key={e.id} task={e.task} isCompleted={e.completed} ids={e.id} deleteTodo={deleteTodo} handleChecked={handleChecked}/>)}
        <div className='flex flex-row items-center justify-between bg-gray-300 pt-3 pb-3 pl-5 pr-5 rounded-md m-1 dark:bg-gray-900 dark:text-blue-50'>
            <p>1 items</p>
            <button>Clear Completed</button>
        </div>
            
      </div>
    </div>
  </div>


  )
}

export default App
