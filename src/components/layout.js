import React from "react"
import "./layout.css"
import Logo from "../images/logo.png"
import "fontsource-roboto-mono"
import "fontsource-amethysta"

//this is where you will put reusable things, e.g. svg sparkly
const Layout = ({ children }) => (
  <div>
  <div>
    <nav>
      {/* Add SVG later */}
      <a>
        <img src={Logo} alt="logo"/>
      </a>
      <ul>
        <li>
          <a 
        </li>
      </ul>
    </nav>
  </div>
    {children}
    <div>footer</div>
  </div>
)

export default Layout
