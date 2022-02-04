import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ProductList = ({ product }) => {
  console.log(product)
  return (
    <div className='product'>
      <Avatar variant="square">

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
