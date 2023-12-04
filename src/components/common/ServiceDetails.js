import React from "react";
import { Paper, Button, Grid, TextField } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import { useTheme, createTheme } from '@mui/material/styles';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function ServiceDetails() {

    var navigation = useNavigate()
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 700,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });
    var themes = useTheme();
    const xs = useMediaQuery("(max-width:400px)")
    const sm = useMediaQuery("(max-width:700px)");
    const md = useMediaQuery(themes.breakpoints.down('md'));
    const lg = useMediaQuery(themes.breakpoints.down('lg'));







    /*----------------------------------------------------------------------*/
    /* Dialog Content */

    const handleClick = async () => {
        alert('navigate to subscription page  ')
        navigation("/buyplan")

        var cd = new Date()
        var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDate() + " " + cd.getHours() + ':' + cd.getMinutes() + ':' + cd.getSeconds()

        var body = {}
        // api calling
    }



    return (

        <div>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', }}>
                <img src='/assets/domainimg3.jpg' style={{ width: '70%', height: 'auto', borderRadius: '10px' }} />
            </div>

            <div>
                <div style={{ marginTop: 50, marginLeft: '6%', fontSize: 30, fontWeight: 700, marginBottom: 30, fontFamily: 'Lobster' }}>
                    SERVICES
                </div>
                <div  >
                    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', paddingInlineStart: xs ? '20%' : sm ? '30%' : '0%' }}>
                        {/* <Grid item xs={12} className={classes.rowStyle} > */}
                        <Grid item xs={12} style={{ display: 'flex', flexDirection: sm ? 'column' : 'row', justifyContent: 'space-around' }} >
                            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', }}  >
                                <div >
                                    <img src="assets/iotservices.jpg" style={{ width: 180, height: 80, borderRadius: '10px' }} />
                                </div>
                                <div>IoT Services</div>
                                <div>services:1</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                    <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClick} >Buy Now</Button></Paper>
                                </div>
                            </Paper>

                            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', }}  >
                                <div >
                                    <img src="assets/imsservices.jpg" style={{ width: 180, height: 80, borderRadius: '10px' }} />
                                </div>
                                <div>IMS Services</div>
                                <div>services:2</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                    <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClick} >Buy Now</Button></Paper>
                                </div>
                            </Paper>

                            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer' }}  >
                                <div >
                                    <img src="assets/digitalservices.webp" style={{ width: 180, height: 80, borderRadius: '10px' }} />
                                </div>
                                <div>Digital services</div>
                                <div>services:3</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                    <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClick} >Buy Now</Button></Paper>
                                </div>
                            </Paper>

                            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', }}  >
                                <div >
                                    <img src="assets/5gran.jpg" style={{ width: 180, height: 80, borderRadius: '10px' }} />
                                </div>
                                <div>5G RAN</div>
                                <div>services:4</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                    <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClick}>Buy Now</Button></Paper>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexDirection: sm ? 'column' : 'row', justifyContent: 'space-around' }}>
                            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer' }}  >
                                <div >
                                    <img src="assets/haulimg.png" style={{ width: 180, height: 80, borderRadius: '10px' }} />
                                </div>
                                <div>Fronthaul & Backhaul</div>
                                <div>services:5</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5, flexWrap: 'wrap' }}>

                                    <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClick}>Buy Now</Button></Paper>
                                </div>
                            </Paper>

                            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', }}  >
                                <div >
                                    <img src="assets/evolvedimg.jpg" style={{ width: 180, height: 80, borderRadius: '10px' }} />
                                </div>
                                <div>Evolved Packed core</div>
                                <div>services:6</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                    <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClick}>Buy Now</Button></Paper>
                                </div>
                            </Paper>

                            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer' }}  >
                                <div >
                                    <img src="assets/publicnet.jpg" style={{ width: 180, height: 80, borderRadius: '10px' }} />
                                </div>
                                <div>Public Nets/Clouds</div>
                                <div>services:7</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                    <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClick}>Buy Now</Button></Paper>
                                </div>
                            </Paper>

                            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap', cursor: 'pointer', }}  >
                                <div >
                                    <img src="assets/privateimg.jpg" style={{ width: 180, height: 80, borderRadius: '10px' }} />
                                </div>
                                <div>Private Nets/Clouds</div>
                                <div>services:8</div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%', marginTop: 5 }}>

                                    <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative', }}><Button style={{ borderColor: 'red', color: 'red', width: '100%', height: 37 }} variant="outlined" onClick={handleClick}>Buy Now</Button></Paper>
                                </div>
                            </Paper>
                        </Grid>



                        {/* </Grid> */}
                    </Grid>
                </div>
            </div>
        </div>
    )
}





