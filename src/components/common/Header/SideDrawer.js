import React, { useState, Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { RiArrowDownSLine } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function SideDrawer(props) {

    var navigation = useNavigate()
    var theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    const [state, setState] = useState(false);

    useEffect(function () {
        setState(props.open)

    }, [props])

    const handleClose = () => {
        props.setOpen(false)

    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(!open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)', color: '#ffffff' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <ListItem disablePadding>
                    <ListItemButton >
                        <div className='header-appbar-maindiv' style={{ display: 'flex', flexDirection: "column", padding: '2px 2px 39.95rem 0px' }}>

                            <span className='header-appbar-btn' style={{ padding: '5px 0px 5px 0px' }}>
                                <div className='dropdown'>
                                    <div className='dropbtn'>
                                        <span  >HOME</span>
                                        <span className='dropbtn-arrow' ><RiArrowDownSLine /></span>
                                    </div>
                                    <div className='dropdown-content'>
                                        <a href='#' onClick={props.handleLogin} >Log In</a>
                                        <a href='#' onClick={props.handleRegister}>Register </a>
                                    </div>
                                </div>
                            </span>

                            <span className='header-appbar-btn' style={{ padding: '5px 15px 5px 0px' }}>
                                <div className='dropdown'>
                                    <div className='dropbtn'>
                                        <span  >CONTACT</span>
                                        <span className='dropbtn-arrow'><RiArrowDownSLine /></span>
                                    </div>
                                    <div className='dropdown-content-static'>
                                        <span>We are available 24/7 to help answer question and solve your problems.</span>
                                        <a href='#' onClick={props.handleSupport} >Help & Support</a>

                                    </div>
                                </div>
                            </span>

                        </div>{/* <ListItemText primary={text} /> */}
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />

        </Box>
    );

    return (
        <div style={{ backgroundColor: '#030404' }}>
            <Fragment key={'right'}>
                {/* <Button onClick={toggleDrawer('left', true)}>Left</Button> */}
                <Drawer
                    anchor={'right'}
                    open={state}
                    onClose={handleClose}
                    onOpen={toggleDrawer('right', true)}
                >
                    {list('right')}
                </Drawer>
            </Fragment>
        </div>
    );
}