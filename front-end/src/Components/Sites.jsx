import React from 'react';

const Sites = ({ sites }) => {
  //create site cards
  return (
    <div>
      { sites.map((site, key) => <h1 key={key}>{ site.name || site.displayName}</h1>) }
    </div>
  )
};

export default Sites;
