import React from 'react'
import SubsCribe from '../components/common/subscribe/Subscribe'
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'

function BuyPlan() {
    return (
        <div >
           <div style={{ width: '100%', }}>
            <Header />
        </div>

        <div style={{ width: '100%', marginBlock: '0px', }}>
            <SubsCribe />
        </div>
        <div style={{ width: '100%', }}>
            <Footer />
        </div>
        </div>
    )
}

export default BuyPlan
