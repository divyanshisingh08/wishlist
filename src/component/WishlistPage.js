
import React from 'react';
import WishlistCard from './WishlistCard';
import { WishlistData } from '../constant';

const WishlistPage = () => {
  return (
    <div className='wishlist-page'>
      <h1>These Are The Places You Liked</h1>
      <h6>Book them now to enjoy discount</h6>
      <div className='wishlist-container'>
        <div className='wishlist-column'>
          <WishlistCard wishlist={WishlistData[0]} />
          <WishlistCard wishlist={WishlistData[2]} />
        </div>
        <WishlistCard wishlist={WishlistData[1]} />
      </div>
    </div>
  );
}

export default WishlistPage;

