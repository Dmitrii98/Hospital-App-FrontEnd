import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import headerLogo from './img/headerLogo.png';
import HeaderStyles from './HeaderStyles.css';

function Header(props) {
  return (
    <div className="header">
      <AppBar className='nav-bar' position="static">
        <Toolbar>
          <img src={headerLogo} alt=""/>
          <Typography className='nav-text' variant="h6">
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
