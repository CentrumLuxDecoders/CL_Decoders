import React from "react";


const FooterAboutus = ()=>{
    return(
        <div className="col-lg-2">
            <div className="footer-widget">
              <h4>About Us</h4>
              <ul>
                {['Home','Services','About','Testimonails','Contact',''].map((item,itemIndex)=>{
                  return(
                    <li key={itemIndex}><a href="#">{item}</a></li>
                  )
                })}
              </ul>
            </div>
          </div>
    )
}
export default FooterAboutus;