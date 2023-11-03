import React from 'react'
import useFetch from '../Hooks/useFetch'

function CustomHookExample1() {
  const res = useFetch('https://jsonplaceholder.typicode.com/posts', {} )
  // const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts', {} ) //second opiton or methould useing destructuring
 if(res.loading) {
  return <h3>Loading ...</h3>
 } 


 
  return (
    <div>
      {res.data.map(post => (<h3 key={post.id}>{post.title}</h3>))}
    </div>
  )
}

export default CustomHookExample1