import { useState } from "react";
import Header from "../components/common/Header/Header";
import ImageComponent from "../components/common/ImageComponent";
import SubsCribe from "../components/common/subscribe/Subscribe";
import Contact from "../components/common/Contact";
import Footer from "../components/common/Footer/Footer";

export default function () {


    return (<div  >


        <div style={{ width: '100%', }}>
            <Header />
        </div>

        <div style={{ width: '100%', marginTop: '0px', }}>
            <SubsCribe />
        </div>
        <div style={{ width: '100%', }}>
            <ImageComponent />
        </div>
        <div style={{ width: '100%', }}>
            <Contact />
        </div>
        <div style={{ width: '100%', }}>
            <Footer />
        </div>


    </div>)
}