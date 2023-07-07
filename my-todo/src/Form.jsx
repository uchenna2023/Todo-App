import React from 'react'

const Form = ({handleAdd, handleInputs, userInputs}) => {
  
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleAdd();

  }

  

  return (
    <div className='bg-gray-600 w-full'>
        <form  onSubmit={handleSubmit} >
            <div className="flex flex-row p-3 justify-center bg-sky-600 w-full rounded-md dark:bg-sky-950">
              <input type="text" className="h-10 w-10/12" value={userInputs} onChange={handleInputs}></input>
              <input type='submit' value='Add'className="bg-pink-400 w-20 font-bold"/>
            </div>
        </form>
    </div>
  )
}

export default Form