import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import Spinner from "../components/Spinner"
import shareIcon from '../assets/svg/shareIcon.svg'



function Listing() {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [shareLinkCopied, setShareLinkCopied] = useState(null)

    const navigate = useNavigate()
    const params= useParams()
    const auth = /* getAuth() */ //Waiting to assigne Auth

    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, 'listings', params.listingId)
            const docSnap = await getDoc(docRef)

            if(docSnap.data.exists()) { 
                console.log(docSnap.data())
                setListing(docSnap.data())
                setLoading(false)
            }
        }
        fetchListing()
    }, [navigate, params.listingId])

    if (loading) {
      return <Spinner />
    }
  return (
    <main>
      {/* Slider */}

      <div className="shareIconDiv" onClick={() => {
        navigator.clipboard.writeText(window.location.href)
        .then(() => {
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
      
      }}>
        <img src={shareIcon} alt='' />
      </div>

      {shareLinkCopied && <p className='LinkCopied'>Link Copied!</p>}

      <div className="listingDetails">
        <p className="listingName">{listing.name} - $ {listing.offer ? listing.discountedPrice
          .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') 
          : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p className="listingLocation">{listing.location}</p>
        <p className="lisingType"> For {listing.type === 'rent' ? 'Rent' : 'Sale'}</p>
        {listing.offer && (
          <p className='discountPrice'> ${listing.regularPrice - listing.discountedPrice} discount</p>
        )}

        <ul className="listingDetailsList">
          <li>
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : '1 Bedroom'}
          </li>
          <li>
            {listing.bedrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : '1 Bathroom'}
          </li>
          <li>{listing.parking && 'Parking Spot'}</li>
          <li>{listing.furnished && 'Furnished'}</li>
        </ul>

        <p className="listingLocationTitle"></p>

          {/* Map */}

          {auth.currentUser?.uid !== listing.userRef && (<Link to={`/contact/${listing.userRef}?listingName=${listing.name}&listingLocation=${listing.location}`} className="primaryButton">Contact Landlord</Link>)}
      </div>
    </main>
  )
}

export default Listing
