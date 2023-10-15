import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../Context/GithubContext'
import AlertContext from '../../Context/alert/AlertContext'
import { searchUsers } from '../../Context/GitHubActions'

function UserSearch() {
    
    const [text, setText] = useState('')
    
    const {users, dispatch, clearUsers} = useContext(GithubContext)

    const {setAlert} = useContext(AlertContext)

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        if (text === '') {
                setAlert("Please enter a Search Option...", "error")
            }else{
                dispatch({type: 'SET_LOADING'})
                const users = await searchUsers(text)
                    dispatch({type: 'GET_USERS', payload: users})    
                    setText('')
                }

            }
        
    const handleChange = (e) => setText(e.target.value)


    
    return (
<div className='grid grid-cals-1 xl:grid-cols-2 lg:grid-2 md:grid-cols-2 mb-8 gap-8'>
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <div className='relative'>
                    <input type='text' className='w-full pr-40 bg-gray-200 input input-lg text-black' placeholder='Search' value={text} onChange={handleChange} />
                    <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                        Go!
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div>
        {users.length > 0 && (<button onClick={clearUsers} className='btn btn-ghost btn-lg'>
            Clear
        </button>)}
    </div>
</div>
  )
}
export default UserSearch