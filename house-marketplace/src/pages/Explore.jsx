import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div className='explor'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
      {/* slider */}

      <p className="exploreCategoryHeading">Catigories</p>
      <div className="exploreCategories">
        <Link to='/category/rent'>
          <img src={rentCategoryImage} alt="rent" className='exploreCategoryImg' />
        <p className='exploreCategoryName'>Places To Rent</p>
        </Link>
        <Link to='/category/sell'>
          <img src={sellCategoryImage} alt="sale" className='exploreCategoryImg' />
        <p className='exploreCategoryName'>Places For Sell</p>
        </Link>
      </div>
      </main>
    </div>
  )
}

export default Explore