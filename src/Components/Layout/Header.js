import React, { useState } from 'react'
import './header.css'
// import { BsMenuButton } from "react-icons/bs";
import { AppBar, Box, Toolbar, Typography, Drawer } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    // handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    // drawer menu
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 }}>
                My React App
            </Typography>

            <ul className='nav-menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>

            </ul>

        </Box>
    )
    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
                    <Toolbar >
                        {/* <BsMenuButton /> */}
                        <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            My React App
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='nav-menu'>
                                <li>
                                    <NavLink activeClassName='active' to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/menu'>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>About</NavLink>
                                </li>

                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', sm: "none" } }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box >
        </>

    )
}

export default Header