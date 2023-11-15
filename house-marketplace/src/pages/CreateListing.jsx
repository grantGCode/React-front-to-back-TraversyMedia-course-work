import React, { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'


function CreateListing() {
  const [geolocationEnabled, setgeolocationEnabled] = useState(true)
  const[loading, setLoading] = useState(false)
  const [fromData, setForData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  })


  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
    if(isMounted) {
      setForData({...fromData, userRef: user.uid})
    } else {
       navigate('/sign-in')
    }
  })  

  return () => { 
      isMounted.current =false
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [isMounted])
 

  if (loading) {
    return <Spinner />
  }

  return (
    <div>Create</div>
  )
}

export default CreateListing