import React from 'react'
import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
    const [name, setName] = useState('') // state added to be changeed to render page

    const renders = useRef(1) //When page reders use Ref will be set to 1
    const prevName = useRef('') // used to diplay prevus staet

    useEffect(() => {
        renders.current = renders.current +1
        prevName.current = name
    }, [name]) 


  return (
    <div>
        <h1>Renders: {renders.current}</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-controle mb-3" />
        <p>When text is added to (or removed) input the state will change, resulting in Renders increasing.</p>
    
        <h2>Prev Named State: {prevName.current}</h2>
    </div>

  )
}

export default UseRefExample2