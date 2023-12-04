import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { AppBar, useMediaQuery } from '@mui/material'
import { BiMenu } from "react-icons/bi"
import { useTheme } from "@mui/material/styles"
import SideDrawer from './SideDrawer'

const Header = (props) => {
  var navigation = useNavigate()
  var theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleLogin = () => {
    alert("Open Login page")
  }

  const handleRegister = () => {
    alert("Open New user Registration page")

  }
  const handleSupport = () => {
    alert("Open help & support page")
  }
  return (
    <div >
      <AppBar position='relative' style={{ backgroundColor: '#212D3A', height: '20%', marginBlockStart: 0 }} >
        <div className='header-appbar-maindiv'>
          <div className='header-logotxt'>TECHHUB HOSTING</div>
          {!md ? <>
            <div className='header-appbar-scnddiv'>
              <span className='header-appbar-btn ' onClick={()=>navigation("/services")}>
                <div className='dropdown'>
                  <div className='dropbtn'>
                    <span>SERVICES</span>
                  </div>
                </div>
              </span>
              <span className='header-appbar-btn'>
                <div className='dropdown'>
                  <div className='dropbtn'>
                    <span>HOME</span>

                  </div>
                  <div className='dropdown-content'>
                    <a href='#' onClick={handleLogin} >Log In</a>
                    <a href='#' onClick={handleRegister}>Register </a>
                  </div>
                </div>
              </span>

              <span className='header-appbar-btn'>
                <div className='dropdown'>
                  <div className='dropbtn'>
                    <span  >CONTACT</span>
                  </div>
                  <div className='dropdown-content-static'>
                    <span>We are available 24/7 to help answer question and solve your problems.</span>
                    <a href='#' onClick={handleSupport} >Help & Support</a>

                  </div>
                </div>
              </span>
            </div>
          </>
            : <>
              <div className='header-menuicon'>
                <div>
                  <BiMenu style={{ cursor: 'pointer', fontSize: '22px' }} onClick={handleOpen} />
                </div>

              </div>
            </>
          }
        </div>
      </AppBar>
      <>
        <SideDrawer open={open} setOpen={setOpen} handleLogin={handleLogin} handleRegister={handleRegister} handleSupport={handleSupport} />
      </>
    </div>
  )
}

export default Header
