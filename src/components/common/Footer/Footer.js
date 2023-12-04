import React from 'react'
import "../style.css"
import { Grid, Link, } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


function Footer() {
    // const matches = useMediaQuery('(max-width:800px)');
  var navigation=useNavigate()

    return (
        <div class='footer-maincontainer'>
            <div class='footer-box'>
                <Grid container spacing={1} class='footer-rowstyle'  >
                    <Grid item xs={4}  >
                        <div class='gridstyle'>
                            About US
                        </div>
                        <div class='logotextcontainer'>
                            
                            <span class='logotext' >TECHHUB HOSTING </span>
                        </div>

                    </Grid>
                    <Grid item xs={4} >
                        <div class='gridstyle'>
                            Contact
                        </div>
                        <div class='contactcontainer'>
                            <p class='address'>Office Address </p>
                            <div class='contactdetails'>
                                <p> +1800 111 2222   </p>
                                <p> contact@example.com </p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={4} >
                        <div class='gridstyle'>
                            Quick Links
                        </div>
                        <div class='linkbox'>
                            <Link  class='link' color="inherit" onClick={()=>navigation("/")} >Home</Link>
                            <Link class='link' color="inherit" >About</Link>
                            <Link class='link' color="inherit" onClick={()=>navigation("/services")} >Services</Link>
                            <Link class='link' color="primary" >Contact Us</Link>
                        </div>

                    </Grid>

                </Grid>
                <Grid container spacing={2} class='gridbottom'>

                    <Grid item xs={12}   >
                        <div class='divstyle'>
                            <Link class='link' color='inherit' ><BsInstagram /></Link>
                            <Link class='link' color='inherit' ><BsFacebook /></Link>
                            <Link class='link' color='inherit' ><BsLinkedin /></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        Copyright © 2023 beaconlegal.in
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

