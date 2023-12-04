import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

import "./style.css"

function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contact, setContact] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [message, setMessage] = useState('')

    const handleClick = async () => {
        alert('Thank you,Our team will contact you soon ')
        var cd = new Date()
        var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDate() + " " + cd.getHours() + ':' + cd.getMinutes() + ':' + cd.getSeconds()

        var body = {}
        // api calling
    }

    return (
        <div className='contact' >
            <div className='contact-box' >
                <Grid container spacing={2}  >
                    <Grid item xs={12} className='headinggrid' >
                        <div className='headingstyle'> Contact Us </div>
                    </Grid>
                    <Grid item xs={6}  >
                        <div className='divtext'> Your First Name</div>
                        <div className='textfield'>
                            <TextField fullWidth size='small' placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='divtext'> Your Last Name</div>
                        <div className='textfield'>
                            <TextField fullWidth size='small' placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='divtext'>  Contact</div>
                        <div className='textfield'>
                            <TextField fullWidth size='small' placeholder='Contact Number..' type='number' value={contact} onChange={(event) => setContact(event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='divtext'> Email Address</div>
                        <div className='textfield'>
                            <TextField fullWidth size='small' placeholder='@example.com' value={emailAddress} onChange={(event) => (event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='divtextmsg'>  Message</div>
                        <div className='textfieldmsg'>
                            <TextField fullWidth multiline rows={4} placeholder='Message........' value={message} onChange={(event) => (event.target.value)} />
                        </div>
                    </Grid>
                    <Grid item xs={12} className='btngrid'>
                        <div >
                            <button onClick={handleClick} className='btn'>Submit</button>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default Contact
