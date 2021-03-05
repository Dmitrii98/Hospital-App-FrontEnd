import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import headerLogo from './img/headerLogo.png';
import './HeaderStyles.css';

function Header(props) {
  return (
    <div className="header">
      <AppBar className='nav-bar' position="static">
        <Toolbar className='toolbar'>
          <div className='left-side'>
            <img src={headerLogo} alt=""/>
            <Typography
              className='nav-text'
              variant="h6"
              >
              {props.name}
            </Typography>
          </div>
          <div className='logout-btn'>
            {props.children}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
