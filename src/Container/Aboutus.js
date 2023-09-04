import React from "react";


const Aboutus = ()=>{
  const boxItems = [{
    label:'CRM Software',
    description:'Customer Relationship Management (CRM)'
  },{
    label:'CMS Software',
    description:'Content management system (CMS)'
  },{
    label:'Healthcare (EHR)',
    description:'The software stores patient information in an electronic format in hospitals and clinics.'
  },{
    label:'E-commerce',
    description:'E-commerce platform helps merchants set up an online business.'
  },{
    label:'Billing Software',
    description:"Manage your customer'\s billing lifecycle"
  },
  {
    label:'24/7 Support & Help',
    description:"Support and maintenance software"
  }]
    return(
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h4>About <em>What We Do</em> &amp; Who We Are</h4>
                <img src="assets/images/heading-line-dec.png" alt="" />
                <p>As domain experts, but also with excellent technological skills, We are well suited to transform a complex business problem into a simple solution.</p>
              </div>
              <div className="row">
                {boxItems.map((item,itemIndex)=>{
                  return(
                    <div className="col-lg-6" key={itemIndex}>
                      <div className="box-item">
                        <h4><a href="#">{item.label}</a></h4>
                        <p>{item.description} </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img src="assets/images/about-right-dec.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Aboutus;