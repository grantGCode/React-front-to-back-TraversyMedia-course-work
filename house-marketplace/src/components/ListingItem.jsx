import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import BathtubIcon from '../assets/svg/bathtubIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'


function ListingItem({listing, id, onDelete }) {
  return (
    <div>
        <li className='categoryListing'>
            <Link to={`/category/${listing.type}/${id}`} className='categoryListingLink'>
              <img src={listing.imgUrls[0]} alt={listing.name} className='categoryListingImg' />
              <div className="categoryListingDetails">
                <p className="categoryListingLocation">{listing.location}</p>
                <p className="categoryListingName">{listing.name}</p>

                <p className="categoryListingPrice">${listing.offer ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : listing.regularPrice}
                  {listing.type === 'rent' && '/ Month'}
                </p>
                <div className="categoryListingInfoDiv">
                  <img src={bedIcon} alt="Bed"/>
                  <p className='categoryListingInfoText'>{listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}</p>
                  <img src={BathtubIcon} alt='Bath' />
                  <p className='categoryListingInfoText'>{listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : '1 Bathroom'}</p>
                </div>
              </div>
            </Link>

            {onDelete && (
              <DeleteIcon className='removeIcon' fill='rgb(231, 76, 60)'  onClick={() => onDelete(listing.id, listing.name)} />
            )}
        </li>
    </div>
  )
}

export default ListingItem