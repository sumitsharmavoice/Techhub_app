import React from 'react'
import ServiceDetails from '../components/common/ServiceDetails'
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'

function Service() {
  return (
    <div>
        <div style={{ width: '100%', }}>
            <Header />
        </div>
      <div style={{ width: '100%', }}>
            <ServiceDetails />
        </div>
        <div style={{ width: '100%', }}>
            <Footer />
        </div>
    </div>
  )
}

export default Service
