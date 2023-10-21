import React from 'react'
import {useRef} from 'react'

function UseRefExample1() {

const inputRef = useRef()
const paraRef = useRef()

const onSubmit = (e) => {
  e.preventDefault()
  console.log(inputRef.current.value)
  inputRef.current.style.color = "white"
  inputRef.current.style.backgroundColor = 'green'
  paraRef.current.innerText = 'Refresh Page Please ;)'
}

  return (
    <div>
    <form onSubmit={onSubmit}>
      <lable htmlFor="name">Name</lable>
      <input type='text' ref={inputRef} id='name' className='from-control mb-2' />
      <button type='submit' className='btn btn-primary'>Submit</button>
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello Click Me</p>
    </form>
  </div>
  )
}

export default UseRefExample1