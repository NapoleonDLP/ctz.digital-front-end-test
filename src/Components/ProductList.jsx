import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './ProductList.css';

const ProductList = ({ product }) => {
  const availableProducts = {
    "Interstitial": null,
    "Leave-Behind": 'https://static.clicktripz.com/home/img/icon-compare.png',
    "Parallax": 'https://static.clicktripz.com/home/img/icon-parallax.png',
    "Overlay": 'https://static.clicktripz.com/home/img/icon-overlay.png',
  };

  return (
    <div className='product'>
      <Avatar variant="square">
        <img className='productImage' src={ availableProducts[product.type] } alt='I'/>
      </Avatar>
      <div className='productType'>
        <Typography>
          { product.type }
        </Typography>
      </div>
    </div>
  )
};

export default ProductList;
