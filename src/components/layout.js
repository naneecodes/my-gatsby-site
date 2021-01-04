import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import Logo from "../images/logo.png"
import Github from "../images/sm-icons/github.svg"
import Instagram from "../images/sm-icons/instagram.svg"
import RSS from "../images/sm-icons/rss.svg"
import Twitch from "../images/sm-icons/twitch.svg"
import Twitter from "../images/sm-icons/twitter.svg"
import YouTube from "../images/sm-icons/youtube.svg"
import "fontsource-roboto-mono"
import "fontsource-amethysta"

//this is where you will put reusable things, e.g. svg sparkly
const Layout = ({ children }) => (
  <div>
  <header>
  <nav>
      {/* Add SVG later */}
      <Link to="/">
        <img src={Logo} alt="logo" className="logo"/>
      </Link>
      <ul className="navlinks">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
   
    {children}
   <footer>
     <p>Made with &hearts; by Nanee </p>
    <ul className="sm-links">
      <li><a href="#"><img src={Github} alt="github"/></a></li>
      <li><a href="#"><img src={Instagram} alt="instagram"/></a></li>
      <li><a href="#"><img src={RSS} alt="rss"/></a></li>
      <li><a href="#"><img src={Twitch} alt="twitch"/></a></li>
      <li><a href="#"><img src={Twitter} alt="twitter"/></a></li>
      <li><a href="#"><img src={YouTube} alt="youtube"/></a></li>
    </ul>
   </footer>
  </div>
)

export default Layout
