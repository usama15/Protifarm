import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  List,
  ListItemText
} from '@material-ui/core';

import image from "../../assets/logo.png"
import './Nav.css'

import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './NavBarStyle';
import { Link } from 'react-router-dom'

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [navOpen, setNavOpen] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 1 new notifications" color="inherit">
          <Badge badgeContent={1} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleNavbar = () => {
    setNavOpen(!navOpen);
  }

  const closeOnMobileMenu = () => {
    setNavOpen(false);
  }

  return (
    <div className={classes.grow}>
      <AppBar className='nav' position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon
              className={classes.menu}
              onClick={() => { handleNavbar();}}
            />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={image} width="80" height="68"/>
          </Typography>

          {/* <div className={classes.grow} /> */}
          <div>
            <List
              className={`navbar ${navOpen ? `${classes.listItemsActive}` : `${classes.listItems}`}`}
            >
              <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                <Link to="/" className={classes.listItemLink}>
                  <ListItemText className={classes.linkText} id="home"><Typography className={classes.title} variant="h6" noWrap><i className="fas fa-home icon"/>Home</Typography></ListItemText>
                </Link>
              </ListItemText>
              <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                <Link to="/rates" className={classes.listItemLink}>
                  <ListItemText className={classes.linkText} id="about"><Typography className={classes.title} variant="h6" noWrap><i className="fas fa-dollar-sign icon"/>Rates</Typography></ListItemText>
                </Link>
              </ListItemText>
              <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                <Link to="/searchvehicles" className={classes.listItemLink}>
                  <ListItemText className={classes.linkText} id="about"><Typography className={classes.title} variant="h6" noWrap><i className="fas fa-dollar-sign icon"/>Search vehicles</Typography></ListItemText>
                </Link>
              </ListItemText>
              <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                <Link to="/contact" className={classes.listItemLink}>
                  <ListItemText className={classes.linkText} id="contact"><Typography className={classes.title} variant="h6" noWrap><i className="fas fa-phone icon"/>Contact</Typography></ListItemText>
                </Link>
              </ListItemText>
            </List>
          </div>
        </Toolbar >
      </AppBar >
      {renderMobileMenu}
      {renderMenu}
    </div >
  );
}