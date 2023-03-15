import React from "react";
import Hero from './Hero'
import Info from "./Info";
import Socials from "./Socials";

import './Card.css';

export default function Card(){

    return(
        <div className="card">
            <Hero/>
            <Info/>
            <Socials/>
        </div>
    )
}