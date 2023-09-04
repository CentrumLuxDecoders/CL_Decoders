import React from "react";


const Clients =()=>{
    const testimonails = [{
      clientName:'Sarah Johnson',
      pos:'CEO of TechExpress',
      rating:'4.0',
      description:'Their software not only streamlined our processes but also boosted our revenue. A game-changer for our company',
    },
    {
      clientName:'Michael Smith',
      pos:'GlobalTrade',
      rating:'4.5',
      description:'CLS delivered exactly what we needed, on time and within budget. Their professionalism and technical prowess are truly commendable',
    },
    {
      clientName:'Emily Davis',
      pos:'COO of DynamicCorp',
      rating:'4.0',
      description:'"Centrum Lux Decoders" took our vision and turned it into reality. Their responsive support and commitment to quality set them apart. Highly recommended.',
    },
    {
      clientName:'John Anderson',
      pos:'CEO of InnovateX',
      rating:'4.0',
      description:'Centrum Lux Decoders transformed our business with their innovative software solutions. Their teams expertise and dedication made all the difference. We couldnt be happier',
    }]
    return(
        <div id="clients" className="the-clients">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading">
            <h4>Check What <em>The Clients Say</em> About Our Development</h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>They are often used in marketing and advertising to build trust and credibility by showcasing real-life experiences of individuals who have benefited from a particular product or service</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="naccs">
            <div className="grid">
              <div className="row">
                <div className="col-lg-7 align-self-center1">
                  <div className="menu">
                    {testimonails.map((item,itemIndex)=>{
                      return(
                        <div className={(itemIndex===0)?'active':''} key={itemIndex}>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>{item.clientName}</h4>
                                {/* <span className="date">30 November 2021</span> */}
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                {/* <span className="category">Financial Apps</span> */}
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <span className="rating">&nbsp;{item.rating.toString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                    
                    <div>
                  </div>
                </div>
              </div> 
                <div className="col-lg-5">
                  <ul className="nacc">
                    {testimonails.map((item,itemIndex)=>{
                      return(
                        <li className={(itemIndex==0)?'active':''} key={itemIndex}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src="assets/images/quote.png" alt="" />
                                    <p>“{item.description}”</p>
                                  </div>
                                  <div className="down-content">
                                    <img src="assets/images/client-image.jpg" alt="" />
                                    <div className="right-content">
                                      <h4>{item.clientName}</h4>
                                      <span>{item.pos}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                    
                  
                  </ul>
                </div>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Clients;