import React, { useState } from 'react';
import { Card, CardHeader, CardActions, Collapse, CardContent, Avatar, Typography, IconButton, ToggleButton } from '@mui/material';
import './SiteCard.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductList from './ProductList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SiteCard = ({ site, color, index}) => {
  const siteName = site.name || site.displayName;
  const colors = ['#1E9AAA', '#fdb000', '#06d6a0'];
  const randomColor = colors[Math.floor(Math.random()*3)]
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(site.enabled);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

      <CardActions sx={{ justifyContent: 'space-between' }}>
        <ToggleButton
          value='check'
          selected={ selected }
          onChange={() => {
            setSelected(!selected)
          }}
          sx={{ border: 0 }}
        >
          <Typography sx={{ fontSize: 12, fontWeight: 400 }} className={ (selected ? 'enabled' : 'notEnabled') }>
            Enabled
          </Typography>
        </ToggleButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={ expanded } timeout='auto' unmountOnExit>
        <CardContent>
          <List>
            {
              site.activeProducts.map((product, index) => (
                <ListItem>
                  <ProductList product={ product } />
                </ListItem>
              ))
            }
          </List>
        </CardContent>
      </Collapse>
    </Card>
  )
};

export default SiteCard;
