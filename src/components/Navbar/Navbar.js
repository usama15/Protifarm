import React from 'react';
import './Nav.css';
import MenuIcon from '@material-ui/icons/Menu';
import image from "../../assets/image.png"

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
            <img src={image} id="nav-img" width="90" height="75" />
            <span className="logo">SBWA</span>
            <ul>
                <li><Link to="/"><span><i className="fas fa-home"/>Home</span></Link></li>
                <li><Link to="/rates"><span><i className="fas fa-dollar-sign"/>Rates</span></Link></li>
                <li><Link to="/contact"><span><i className="fas fa-phone"/>Contact</span></Link></li>
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