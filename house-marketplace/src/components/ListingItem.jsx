import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponet as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import BathtubIcon from '../assets/svg/bathtubIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'


function ListingItem({listing, id }) {
  return (
    <div>
        <li className='categoryListing'>
            <Link to={`/category/${listing.type}/${id}`} className='categoryListingLink'></Link>
            <img src={listing.imageUrls[1]} alt={listing.name} className='categoryListingImg' />
        </li>
    </div>
  )
}

export default ListingItem