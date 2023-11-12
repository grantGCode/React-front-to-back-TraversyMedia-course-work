import React from 'react'
import { useState } from 'react'
import { getAuth} from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const {name, email } = formData

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  // return user ? <h1>{user.displayName}</h1> : <h1>Not Logged In</h1>

  return (
  <div className='profile'> 
    <header className='profileHeader'>
      <p className="pageHeader">My Profile</p>
      <button type='button' className='LogOut' onClick={onLogout}>Logout</button>
    </header>
  </div>
  )}

export default Profile