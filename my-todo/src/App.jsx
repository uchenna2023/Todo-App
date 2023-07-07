import {BsSunFill} from 'react-icons/bs'

const App = () => {
  return (
    <div>
      <div className="h-64 bg-[url('./assets/logo2.png')] bg-no-repeat bg-cover w-full m-auto bg-transparent">

      </div>
      <div className="w-full h-64  backdrop-brigthness dark:bg-slate-800 -mt-60"></div>
          <div className="w-6/12 m-auto -mt-56">
          <div className="flex flex-row justify-between items-center pb-20">
              <h2 className="pr-5 pt-5 text-gray-100 font-bold text-5xl tracking-wider dark:text-gray-300">TODO</h2>
              <BsSunFill className='text-gray-100 text-4xl dark:text-gray-300'/>
          </div>
          <div className='bg-gray-600 w-full'>
            <form>
                <div className="flex flex-row p-3 justify-center bg-sky-600 w-full rounded-md dark:bg-sky-950">
                  <input type="text" className="h-10 w-10/12"></input>
                  <input type='submit' value='Add'className="bg-pink-400 w-20 font-bold"/>
                </div>
            </form>
            <div>
        <div className="border-4 w-full border-blue-400 rounded-md bg-blue-600 mt-2">
        <div className='flex flex-row justify-center gap-1 bg-gray-100 pt-2 pb-2 border-b-4 border-b-inherit dark:bg-gray-900'>
          <button>All</button>
          <button>Completed</button>
          <button>Active</button>
        </div>
            
            
        </div>
    </div>
          </div>

        </div> 
    </div>
  )
}

export default App
