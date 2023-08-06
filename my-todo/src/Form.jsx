/* eslint-disable react/prop-types */


const Form = ({ userInput, handle, addTodo }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();

  }
  return (
    <div className='bg-gray-200 w-full'>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row p-3 justify-center bg-sky-600 w-full rounded-md dark:bg-sky-950">
          <input type="text" className="h-10 w-10/12" value={userInput} onChange={handle}></input>
          <input type='submit' value='Add' className="bg-pink-400 w-20 font-bold hover:bg-pink-600 hover:text-white" />
        </div>
      </form>
    </div>
  )
}

export default Form