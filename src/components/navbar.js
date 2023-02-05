import React from "react";
import "./navbarstyle.css";

import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from 'react-icons/fa';
const Navbar =()=>{
  return (
    <>
  <nav className="main-nav">
    <div className="logo">
      <h2><span>E</span>-summit</h2>
    </div>
    <div className="menu-link">
      <ul>
        <li>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Home</a>
        </li>
        <li>
          <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            About</a>
        </li>
        <li>
          <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            News</a>
        </li>
        <li>
          <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            help</a>
        </li>
      </ul>
    </div>
    <div className="social-media">
      <ul className="social-media-desktop">
        <li><a href="#">
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FaFacebookSquare className="facebook"/></a></li>
        <li><a href="#">
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FaInstagramSquare className="insta"/></a></li>
        <li><a href="#">
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FaYoutubeSquare className="youtube"/></a></li>
      </ul>

    </div>
  </nav>
    </>
  )
}
export default Navbar;