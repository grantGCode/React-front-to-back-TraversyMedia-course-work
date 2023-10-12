import { useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom'
import GithubContext from '../Context/GithubContext/GithubContext'


function User() {
    const {getUser} = useContext(GithubContext)

    const params = useParams()
    
    useEffect(() => { 
      getUser(params.login)
      
        // console.log(user.login)
    }, [])

  return (
    <div>{params.login}</div>
  )
}

export default User