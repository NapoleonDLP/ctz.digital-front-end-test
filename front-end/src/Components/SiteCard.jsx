import React from 'react';
import { Card, CardHeader, Avatar, Typography } from '@mui/material';
import './SiteCard.css';

const SiteCard = ({ site, color, index}) => {
  const siteName = site.name || site.displayName;
  const colors = ['#1E9AAA', '#fdb000', '#06d6a0'];
  const randomColor = colors[Math.floor(Math.random()*3)]

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }} raised={ true }>
      <CardHeader
        avatar={
          <Avatar sx={{}} aria-label='site'>
            { site.logo ? <img src={ site.logo } alt='logo'/> : siteName[0].toUpperCase() }
          </Avatar>
        }
        title={
          <Typography variant='h6' className='siteCardTitle'>
            { siteName }
          </Typography>
          }
        style={{backgroundColor: randomColor }}
        subheader={
          <Typography
            sx={{fontSize: 10}}
            className='siteCardSubheader'
          >
            { site.domain }
          </Typography>
        }
      />
    </Card>
  )
};

export default SiteCard;
