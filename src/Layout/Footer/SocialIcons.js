import React from "react";


const SocialIcons = ()=>{
    const iconsArr =[{
        icon:'fab fa-facebook',
        color:'#3b5998'
    },
    {
        icon:'fab fa-twitter',
        color:'#55acee'
    },{
        icon:'fab fa-instagram',
        color:'#ac2bac'
    },{
        icon:'fab fa-linkedin-in',
        color:'#0082ca'
    },{
        icon:'fab fa-github',
        color:'#333333'
    }]
    return(
        <div className="col-lg-12">
            <section className="mt-3 text-center">
            {iconsArr.map((item,itemIndex)=>{
                return(
                    <a
                        key={itemIndex}
                        className="btn text-white btn-floating m-1"
                        style={{padding:'5px 10px',backgroundColor: item.color}}
                        role="button">
                            <i className={item.icon}></i>
                    </a>
                )   
            })}
            </section>
        </div>
    )
}

export default SocialIcons;