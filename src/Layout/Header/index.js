import React from "react";


const LayoutHeader = ()=>{
    const headerTagStyle = {
        'visibility': 'visible',
        'WebkitAnimationDuration': '0.75s', 
        'MozAnimationDuration': '0.75s',
        'animationDuration':'0.75s',
        'WebkitAnimationDelay':'0s', 
        'MozAnimationDelay': '0s',
        'animationDelay': '0s'                
    }
    const menus = [
        {
            label:"Home",
            href:"#top",
            iconStyle:null,
            appendClass:''
        },
        {
            label:"Services",
            href:"#services",
            iconStyle:null,
            appendClass:''
        },
        {
            label:"About",
            href:"#about",
            iconStyle:null,
            appendClass:''
        },
        {
            label:"Contact",
            href:"#newsletter",
            iconStyle:null,
            appendClass:''
        },
        {
            label:"Sign In Now",
            href:"#newsletter",
            iconStyle:"fa fa-sign-in-alt pr-1",
            appendClass:"gradient-button"
        },
        
    ]
    return(
        <header className="header-area header-sticky wow slideInDown animated" data-wow-duration="0.75s" data-wow-delay="0s" style={headerTagStyle}>
            <div className="container">
            <div className="row">
                <div className="col-12">
                <nav className="main-nav">
                     {/* ***** Logo Start *****  */}
                    <a href="" className="logo" style={{marginLeft:'15px',display:'flex',alignItems:'center'}}>
                    <img src="assets/images/logo.png" alt="Centrum Lux Decoders" style={{width:'75px'}} />
                     <h2 style={{verticalAlign:'middle',color:'rgb(18 8 81)'}} className="logoText">
                            <span>C</span>entrum <span>L</span>ux <span>D</span>ecoders</h2>
                    </a>
                    {/* ***** Logo End ***** */}
                    {/* ***** Menu Start ***** */}
                    <ul className="nav">
                        {menus.map((item,itemIndex)=>{
                            return(
                                <li className={"scroll-to-section "+item.appendClass} key={itemIndex}>
                                    <a href={item.href} className={(itemIndex===0)?'active':''}>
                                        {(item.iconStyle!==null)?
                                            <i className={item.iconStyle}>&nbsp;</i> 
                                        :   <></>}
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>        
                    <a className="menu-trigger">
                        <span>Menu</span>
                    </a>
                   {/* ***** Menu End ***** */}
                </nav>
                </div>
            </div>
            </div>
        </header>
    )
}

export default LayoutHeader;