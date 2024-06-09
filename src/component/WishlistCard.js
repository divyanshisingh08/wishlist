import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import { WishlistData } from '../constant'

const WishlistCard = ({wishlist}) => {
  const {image,title,place}=wishlist;

    
  return (
    <div className='card'>
        <img src= {image} alt="" />
        <div className='card-header'>
        <h4>{title}</h4>
        <DeleteIcon className="delete-icon" />
      </div>
        <h6 >{place}</h6>
    
    </div>
  )
}

export default WishlistCard
