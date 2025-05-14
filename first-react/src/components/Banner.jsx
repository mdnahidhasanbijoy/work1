import React from 'react'
import bannerimg from '../assets/image.png'
const Banner = () => {
  return (
    <div>
    <div className='banner'>
      <img src={bannerimg} alt="" />
    </div>
     <div className='banner-content'>
        <h1>Welcome! <br></br>We Made Delicious <br></br>Food for You</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, officia!</p>
        <button>Order online</button>
     </div>
    </div>
  )
}

export default Banner
