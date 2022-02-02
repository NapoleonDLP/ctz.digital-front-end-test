import React from 'react';
import { Card, CardHeader, Avatar } from '@mui/material';

const SiteCard = ({ site }) => {
  const siteName = site.name || site.displayName;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{}} aria-label='site'>
            { site.logo ? <img src={ site.logo } alt='logo'/> : siteName[0].toUpperCase() }
          </Avatar>
        }
        title={ siteName }
        color='primary'
      />
    </Card>
  )
};

export default SiteCard;
