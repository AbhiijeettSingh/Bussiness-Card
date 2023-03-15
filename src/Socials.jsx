import React from "react";
import './Socials.css'

import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import facebook from './assets/facebook.svg';

export default function Socials() {
  return (
    <div className="socials">
      <div className="twitter">
        <a href="https://twitter.com/AbhiijeetSingh">
          <img src={twitter} alt="" />
        </a>
      </div>
      <div className="facebook">
        <a href="#">
          <img src={facebook} alt="" />
        </a>
      </div>
      <div className="instagram">
        <a href="https://www.instagram.com/abhiijeettsingh/">
          <img src={instagram} alt="" />
        </a>
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/abhiijeetsingh/">
         <img src={linkedin} alt="" />
        </a>
      </div>
      <div className="github">
        <a href="https://github.com/AbhiijeettSingh">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
}
