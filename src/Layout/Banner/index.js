import React from "react";



const LayoutBanner = ()=>{
    const bannerTagStyle = {
        'visibility': 'visible',
        'WebkitAnimationDuration': '1s', 
        'MozAnimationDuration': '1s',
        'animationDuration':'1s',
        'WebkitAnimationDelay':'0.5s', 
        'MozAnimationDelay': '0.5s',
        'animationDelay': '0.5s'                
    }

    const bannerContentStyle = {
        'visibility': 'visible',
        'WebkitAnimationDuration': '1s', 
        'MozAnimationDuration': '1s',
        'animationDuration':'1s',
        'WebkitAnimationDelay':'1s', 
        'MozAnimationDelay': '1s',
        'animationDelay': '1s'                
    }
    
    return(
        <div className="main-banner wow fadeIn animated" id="top" data-wow-duration="1s" data-wow-delay="0.5s" style={bannerTagStyle}>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                <div className="left-content show-up header-text wow fadeInLeft animated" data-wow-duration="1s" data-wow-delay="1s" style={bannerContentStyle}>
                    <div className="row">
                    <div className="col-lg-12">
                        <h2>The best software is the one that fits your needs.</h2>
                        <p>We specialize in developing smart, budget-friendly, and user-friendly web applications, desktop software, and mobile apps. Our solutions optimize operations for businesses while opening up fresh revenue streams for startups and established enterprises.</p>
                    </div>
                    {/* <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                        <a href="#contact">Free Quote <i className="fab fa-apple"></i></a>
                        </div>
                        <div className="white-button scroll-to-section">
                        <a href="#contact">Free Quote <i className="fab fa-google-play"></i></a>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="right-image wow fadeInRight animated" data-wow-duration="1s" data-wow-delay="0.5s" style={bannerTagStyle}>
                    <img src="assets/images/flat-design-cms-concept-illustrated_23-2148796510_1.avif" alt="" style={{position:'relative',top:'-80px'}} />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default LayoutBanner;