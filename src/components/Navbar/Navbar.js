import React from 'react';
import './Nav.css';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'
export default function Navbar({handleNavbar,navOpen}) {
    const navbarOpener = () => {
        handleNavbar();
    }
    return (
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn" onClick={() => navbarOpener()}>
                <MenuIcon/>
            </label>
            <label className="logo">SBWA</label>
            <ul>
                <li><Link to="/"><span>Home</span></Link></li>
                <li><Link to="/rates"><span>Rates</span></Link></li>
                <li><Link to="/contact"><span>Contact</span></Link></li>
            </ul>
        </nav>
    );
}

{/* <AppBar className='nav' position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon
                            onClick={handleNavbar}
                        />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Farm
                    </Typography>
                    <div>
                        <List
                            className={`${navOpen ? `${classes.listItemsActive}` : `${classes.listItems}`}`}
                        >
                            <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                                <Link to="/" className={classes.listItemLink}>
                                    <ListItemText className={classes.linkText}>Home</ListItemText>
                                </Link>
                            </ListItemText>
                            <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                                <Link to="/rates" className={classes.listItemLink}>
                                    <ListItemText className={classes.linkText}>Rates</ListItemText>
                                </Link>
                            </ListItemText>
                            <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                                <Link to="/contact" className={classes.listItemLink}>
                                    <ListItemText className={classes.linkText}>Contact</ListItemText>
                                </Link>
                            </ListItemText>
                        </List>
                    </div>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar> */}