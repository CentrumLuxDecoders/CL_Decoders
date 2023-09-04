import React from "react";
import Header from "./Header";
import LayoutBanner from "./Banner";
import Footer from "./Footer";

const LayoutHeader = ({children})=>{
    
    return(
        <>
            <Header />
            <LayoutBanner />
            {children}
            <Footer />
        </>
    )
}

export default LayoutHeader;