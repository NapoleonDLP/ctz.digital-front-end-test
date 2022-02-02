import React from 'react';
import Card from '@mui/material/Card';

const SiteCard = ({ site }) => {

  return (
    <Card>
      <h1>{ site.name || site.displayName }</h1>
    </Card>
  )
};

export default SiteCard;
