import React from 'react'
import "./style.css"


function ImageComponent() {
    return (
        <div className='img-maindiv'>
            <div className='img-scnddiv'>
                <div className='img-maintext-div'>
                    <h1 >Data Centres All Around the World</h1>
                </div>
                <div className='img-scndtext-div'>
                    <h3>
                        Our web hosting, WordPress hosting, and cloud hosting plans offer server
                        locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands.
                    </h3>
                </div>
                <div className='img-map-bgimg'>
                    <img className='img-map-bgimg' src='./assets/hostingdetails.webp' />
                </div>
            </div>
        </div>
    )
}

export default ImageComponent
