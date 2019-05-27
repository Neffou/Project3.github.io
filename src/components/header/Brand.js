import React from "react";

import yoshiplogo from "../../assets/images/yoship-logo.png";

import "./Brand.css"

const Brand = () => {

    return  (
        <div>
            <img src={yoshiplogo} alt="yoship logo" className="header_logo"/>
            <span className="header_brand">YoShip</span>
        </div>
    )
}

export default Brand