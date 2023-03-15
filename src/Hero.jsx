import React from "react";
import me from './assets/me.png'
import emailSvg from './assets/email.svg';

import './Hero.css';
export default function Hero(){
    return(
        <div className="Hero">
            <div className="image">
                <img src={me} alt="" />
            </div>
            <div className="name">
                Abhijeet Singh
            </div>
            <div className="profession">
                Frontend Developer
            </div>
            <div className="email">
            
                <button> <img src={emailSvg} alt="" />Email</button>
            </div>
        </div>
    )
}