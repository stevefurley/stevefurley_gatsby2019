import React from "react"
// import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobileMenuButton from "./mobileMenuButton"
import styled from "styled-components"
import HeaderLogo from "../images/logo.svg"
import HeaderText from "./headerComponents/homePageText"
import Curve from "./headerComponents/curve"
import Triangle from "./headerComponents/triangle"
import Breakpoint from "react-socks"
import { Location } from "@reach/router"
import MainMenu from "./mainMenu"

import { setDefaultBreakpoints } from "react-socks"

setDefaultBreakpoints([{ s: 0 }, { m: 1068 }])
// import HeaderText from "./headerComponents/homepageText"
// const ListLink = props => (
//   <li>
//     <Link to={props.to} activeClassName="active">
//       {props.children}
//     </Link>
//   </li>
// )

const Header = ({ ...props }) => {
  return (
    <HeaderWrapper>
      <Triangle />
      <Location>
        {({ location }) => {
          if (location.pathname === "/") {
            return <Curve />
          } else {
            return
          }
        }}
      </Location>
      <Location>
        {({ location }) => {
          return (
            <header
              className={
                location.pathname === "/" ? "home-header" : "not-home-header"
              }
            >
              <div className=" header-section">
                <img
                  src={HeaderLogo}
                  alt="Steve Furley Freelance Web Developer"
                  className="header-logo"
                />
                <span className="filler" />
                <div className="menu-section">
                  <Breakpoint m up>
                    <div
                      className={
                        "header-menu " +
                        (location.pathname === "/"
                          ? "home-menu"
                          : "not-home-menu")
                      }
                    >
                      <MainMenu />
                    </div>
                  </Breakpoint>
                  <Breakpoint s only>
                    <MobileMenuButton
                      /*passing down the state to the toggle menu button */
                      indextoggle={props.indextoggle}
                    />
                  </Breakpoint>
                </div>
              </div>
              {location.pathname === "/" ? <HeaderText /> : ""}
            </header>
          )
        }}
      </Location>
    </HeaderWrapper>
  )
}

// Set here the ID of the home page.

const HeaderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 50px;
  .filler {
    display: flex;
    flex-grow: 1;
  }
  header {
    position: relative;
    &.home-header {
      /* min-height: 80vh; */
      display: flex;
      flex-direction: column;
    }
    &.not-home-header {
      background: ${props => props.theme.colors.black};
    }
    .header-section {
      position: relative;
      z-index: 4;
      width: 100%;
      z-index: 9;
      position: relative;
      @media screen and (min-width: ${props => props.theme.responsive.m}) {
        display: flex;
        align-items: center;
      }
      .header-logo {
        width: 100%;
        max-width: 70vw;
        @media screen and (min-width: 740px) {
          max-width: 40vw;
          padding-left: 30px;
        }
        @media (min-width: 980px) {
          max-width: calc(300px + 9.2vw);
          padding-left: 50px;
        }
        @media (min-width: 1921px) {
          max-width: 29vw;
        }
      }
      .menu-section {
        display: block;
        text-align: right;
        align-self: center;
        @media screen and (min-width: 740px) {
          padding-right: 30px;
          height: 30px;
        }
        @media screen and (min-width: 980px) {
          padding-right: 50px;
          height: auto;
        }
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
