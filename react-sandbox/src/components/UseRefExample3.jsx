import React from 'react'
import ToDo from './toDo'
import { useState } from 'react'

function UseRefExample3() {
 const [showToDo, setShowToDo] = useState(true)
 

  return (
    <div>
        {showToDo && <ToDo />}
        <button 
            className="btn btn-primary" 
            onClick={() => setShowToDo(!showToDo)}
        >
          Toggle Todo
        </button>
    </div>
  )
}

export default UseRefExample3