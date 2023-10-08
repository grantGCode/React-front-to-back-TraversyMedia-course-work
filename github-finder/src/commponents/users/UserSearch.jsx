import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../Context/GithubContext/GithubContext'

function UserSearch() {
    
    const [text, setText] = useState('')
    
    const {users} = useContext(GithubContext)

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        
        if (text === '') {
                alert("Please enter a Search Option...")
            }else{
                // @todo Search users

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
        {users.length > 0 && (<button className='btn btn-ghost btn-lg'>
            Clear
        </button>)}
    </div>
</div>
  )
}
export default UserSearch