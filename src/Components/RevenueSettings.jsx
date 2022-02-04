import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const RevenueSettings = ({ revenue }) => {
  const [ publisherShare, setPublisherShare ] = useState(revenue.publisherShare);

  const marks = [
    {
      value: 1,
      label: '.1%'
    },
    {
      value: 9,
      label: '.9%'
    }
  ];

  const handleChange = (event, newValue) => {
    newValue = newValue/10;
    setPublisherShare(newValue);
  };

  const valueText = (value) => `${value}%`;

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="track-false-slider" gutterBottom>
        Publisher Share: { publisherShare + '%'}
      </Typography>
      <Slider
        onChange={ handleChange }
        aria-labelledby="track-false-slider"
        getAriaValueText={ valueText }
        defaultValue={ publisherShare*10 }
        marks={ marks }
        min={ 1 }
        max={ 9 }
        color='secondary'
      />
    </Box>
  )
};

export default RevenueSettings;
