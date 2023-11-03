
import React, { useState, useCallback} from 'react'

function UseCallbackExample() {
  const [task, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTask} />
      {task.map((task, index) => ( <p key={index}>{task}</p>))}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
  console.log('Button rendered')
  return <div>
    <button onClick={addTask} className='btn btn-primary'>Add Task</button>
  </div>
})

export default UseCallbackExample