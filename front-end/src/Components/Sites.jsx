import React from 'react';
import SiteCard from './SiteCard';
import './Sites.css';

const Sites = ({ sites }) => {
  //create site cards
  return (
    <div>
      <h2 className='sitesTitle'>Sites</h2>
      <div className='sitesContainer'>
        { sites.map((site, key) => <SiteCard site={ site } key={ key } index={ key }/>)}
      </div>
    </div>
  )
};

export default Sites;
