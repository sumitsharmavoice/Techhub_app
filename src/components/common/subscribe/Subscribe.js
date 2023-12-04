import React from 'react';
import "./Subscribe.css";
import { useNavigate } from 'react-router-dom';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

function SubsCribe() {
    var navigation = useNavigate();

    var theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));


    const handleClick = () => {
        alert("Open Popup")
        // navigation("/random")
    }
    return (
        <div className='cbtn-maincontainer'>
            <div className='cbtn-box'>
                <div className='cbtn-boxscnd'>
                    <div className='cbtn-boxthrd'>
                        <Grid container spacing={2} style={{ display: 'flex', flexDirection: md ? 'column' : 'row',justifyContent:'center', alignItems: 'center',marginLeft:md?'-100px':sm?'-100px':'' }} >
                            <Grid className='card-div' item xs={4}>
                                <div class="card">
                                    <div class="content">
                                        <div class="title">Hatchling Plan</div>
                                        <div class="description"><span className='circle-dot'></span>1 websites</div>
                                        <div class="description"><span className='circle-dot'></span>10GB SSD Storage</div>
                                        <div class="description"><span className='circle-dot'></span>Chat support​</div>
                                        <div class="description"><span className='circle-dot'></span>Unmetered bandwidth</div>
                                        <div class="description"><span className='circle-dot'></span>Basic email included</div>
                                        <div class="description"><span className='circle-dot'></span>Free Domain 1st Year</div>
                                        <div class="description"><span className='circle-dot'></span>Free SSL</div>
                                        <div class="description"><span className='circle-dot'></span>Wordpress pre-installed</div>
                                        <div class="description"><span className='circle-dot'></span>Malware Scanning</div>
                                    </div>
                                    <div class="price">$3.75/M*</div>
                                    <button class="button">
                                        Subscribe
                                    </button>
                                </div>
                            </Grid>
                            <Grid className='card-div' item xs={4}>
                                <div class="card">
                                    <div class="content">
                                        <div class="title">Baby Plan</div>
                                        <div class="description"><span className='circle-dot'></span>2 websites</div>
                                        <div class="description"><span className='circle-dot'></span>20GB SSD Storage</div>
                                        <div class="description"><span className='circle-dot'></span>Phone & Chat support​</div>
                                        <div class="description"><span className='circle-dot'></span>Unmetered bandwidth</div>
                                        <div class="description"><span className='circle-dot'></span>Basic email included</div>
                                        <div class="description"><span className='circle-dot'></span>Free Domain 1st Year</div>
                                        <div class="description"><span className='circle-dot'></span>Free SSL</div>
                                        <div class="description"><span className='circle-dot'></span>Wordpress pre-installed</div>
                                        <div class="description"><span className='circle-dot'></span>Malware Scanning</div>
                                        <div class="description"><span className='circle-dot'></span>Cloudflare CDN</div>
                                        <div class="description"><span className='circle-dot'></span>Increased performance (2 vCPU's)</div>
                                    </div>
                                    <div class="price">$4.50/M*</div>
                                    <button class="button">
                                        Subscribe
                                    </button>
                                </div>
                            </Grid>
                            <Grid className='card-div' item xs={4}>
                                <div class="card">
                                    <div class="content">
                                        <div class="title">Business Plan</div>
                                        <div class="description"><span className='circle-dot'></span>3 websites</div>
                                        <div class="description"><span className='circle-dot'></span>40GB SSD Storage</div>
                                        <div class="description"><span className='circle-dot'></span>Phone & Chat support​</div>
                                        <div class="description"><span className='circle-dot'></span>Unmetered bandwidth</div>
                                        <div class="description"><span className='circle-dot'></span>Basic email included</div>
                                        <div class="description"><span className='circle-dot'></span>Free Domain 1st Year</div>
                                        <div class="description"><span className='circle-dot'></span>Free SSL</div>
                                        <div class="description"><span className='circle-dot'></span>Wordpress pre-installed</div>
                                        <div class="description"><span className='circle-dot'></span>Malware Scanning</div>
                                        <div class="description"><span className='circle-dot'></span>Cloudflare CDN</div>
                                        <div class="description"><span className='circle-dot'></span>Increased performance (2 vCPU's)</div>
                                        <div class="description"><span className='circle-dot'></span>Daily Website Back Up - 1st Year</div>
                                        <div class="description"><span className='circle-dot'></span>Domain Privacy - 1st Year
                                        </div>
                                    </div>

                                    <div class="price">$6.25/M*</div>
                                    <button class="button">
                                        Subscribe
                                    </button>
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubsCribe
