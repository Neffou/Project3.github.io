import React from "react";

import yoshiplogo from "../../assets/images/yoship-logo.png";

import "./Brand.css"

const Brand = ({background}) => {

    return  (
        <div className="header_brand_div">
            <img src={yoshiplogo} alt="yoship logo" className="header_logo"/>
            <span className={background ? "header_brand" : "header_brand_black"}>YoShip</span>
        </div>
    )
}

export default Brand