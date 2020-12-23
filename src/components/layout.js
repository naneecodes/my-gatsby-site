import React from "react"
import "./layout.css"
import "fontsource-roboto-mono"
import "fontsource-amethysta"

//this is where you will put reusable things, e.g. svg sparkly
const Layout = ({ children }) => (
  <div>
    {/* SVG TWINKLE */}
    <svg viewBox="0 0 600 400" style="display: none">
      <defs>
        <symbol id="twinkle" viewBox="0 0 160 160">
          <path
            fill="currentColor"
            d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 100 C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          />
        </symbol>
      </defs>
    </svg>
    <header>
      <div className="header-container">
        <nav>
          {/* ADD HOMEAPAGE URL TO LOGO*/}
          <div className="logo sparkly">
            <svg viewBox="0 0 160 160" width="10" height="10">
              <use href="#twinkle" />
            </svg>

            <svg viewBox="0 0 160 160" width="20" height="20">
              <use href="#twinkle" />
            </svg>

            <svg viewBox="0 0 160 160" width="15" height="15">
              <use href="#twinkle" />
            </svg>

            <svg viewBox="0 0 160 160" width="25" height="25">
              <use href="#twinkle" />
            </svg>
            <a>
              <img src="images/logos/navy-logo-simple.png" />
            </a>
          </div>
          {/* add section links */}
          <ul className="menu-links">
            <li>
              <a href="./pages/about.js">About</a>
            </li>
            {/* <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li> */}
          </ul>
          {/* responsive burger menu */}
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          {/* add color toggle */}
        </nav>
      </div>
    </header>

    {children}
    <div>footer</div>
  </div>
)

export default Layout
