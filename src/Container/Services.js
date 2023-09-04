import React from "react";


const Services = ()=>{
    const serviceTagStyle = {
        'visibility': 'visible',
        'WebkitAnimationDuration': '1s', 
        'MozAnimationDuration': '1s',
        'animationDuration':'1s',
        'WebkitAnimationDelay':'0.5s', 
        'MozAnimationDelay': '0.5s',
        'animationDelay': '0.5s'                
    }
    return(
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading  wow fadeInDown animated" data-wow-duration="1s" data-wow-delay="0.5s" style={serviceTagStyle}>
                <h4>Amazing <em>Services &amp; Features</em> for you</h4>
                <img src="assets/images/heading-line-dec.png" alt="" />
                <p>We Are Committed To Making Your Business Better Through Latest Technology Without Compromising Quality</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="service-item first-service">
                <div className="icon"></div>
                <h4>Software Design & Development</h4>
                <p>During the design & development phase, everything that will be needed to implement the project is arranged clearly.</p>
                <div className="text-button">
                  <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item second-service">
                <div className="icon"></div>
                <h4>Web Application Development</h4>
                <p>An application that uses web-based technology to perform specific tasks is
                                            called a
                                            website application, commonly known as a web app. The server hosts the web
                                            application and stores information from numerous connected computers. Web
                                            applications can be run through client programs so that you can access and enter
                                            data. </p>
                <div className="text-button">
                  <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item third-service">
                <div className="icon"></div>
                <h4>Mobile Application Development</h4>
                <p>
                                            Mobile application development is the process of creating software for
                                            smartphones
                                            and digital assistants, most ordinarily for Android and iOS. The software is
                                            often
                                            preinstalled on the device, downloaded from a mobile app store, or accessed
                                            through
                                            a mobile browser.</p>
                <div className="text-button">
                  <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-item fourth-service">
                <div className="icon"></div>
                <h4>Web Hosting & Server Maintenance</h4>
                <p>Server maintenance is the process of keeping the server updated and dealing in
                                            tip-top shape. Because servers check out all of your data, it is vital to watch
                                            and
                                            properly take care of them so that you simply don’t lose valuable information
                                            just
                                            in case of an error.</p>
                <div className="text-button">
                  <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            
          </div>
      
        </div>
      </div>
    )
}

export default Services;