import React from 'react';
import { Card, CardHeader, Avatar } from '@mui/material';

const SiteCard = ({ site, color, index}) => {
  const siteName = site.name || site.displayName;
  const colors = ['#1E9AAA', '#fdb000', '#06d6a0'];
  const randomColor = colors[Math.floor(Math.random()*3)]

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{}} aria-label='site'>
            { site.logo ? <img src={ site.logo } alt='logo'/> : siteName[0].toUpperCase() }
          </Avatar>
        }
        title={ siteName }
        style={{backgroundColor: randomColor }}
        subheader={ site.id }
      />
    </Card>
  )
};

export default SiteCard;
