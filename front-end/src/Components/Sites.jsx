import React from 'react';
import SiteCard from './SiteCard';
import './Sites.css';

const Sites = ({ sites }) => {
  //create site cards
  return (
    <div className='sitesContainer'>
      { sites.map((site, key) => <SiteCard site={ site } key={ key } index={ key }/>)}
    </div>
  )
};

export default Sites;
