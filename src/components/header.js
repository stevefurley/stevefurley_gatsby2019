import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobileMenuButton from "./mobileMenuButton"
import styled from "styled-components"
import HeaderLogo from "../images/logo.svg"
import HeaderText from "./headerComponents/homePageText"
import Curve from "./headerComponents/curve"
import Triangle from "./headerComponents/triangle"
import Breakpoint from "react-socks"
import { Location } from "@reach/router"

import { setDefaultBreakpoints } from "react-socks"

setDefaultBreakpoints([{ s: 0 }, { m: 740 }, { l: 980 }, { xl: 1140 }])
// import HeaderText from "./headerComponents/homepageText"
const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName="active">
      {props.children}
    </Link>
  </li>
)

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
              <div className="wrapper header-section">
                <img src={HeaderLogo} alt="Logo" className="header-logo" />
                <div className="menu-section">
                  <Breakpoint m up>
                    <ul
                      className={
                        "header-menu " +
                        (location.pathname === "/"
                          ? "home-menu"
                          : "not-home-menu")
                      }
                    >
                      <ListLink to="/">Home</ListLink>
                      <ListLink to="/#about">about</ListLink>
                      <ListLink to="/projects">Projects</ListLink>
                      <ListLink to="/#contact">Contact</ListLink>
                    </ul>
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

  header {
    position: relative;
    &.home-header {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
    }
    &.not-home-header {
      background: ${props => props.theme.colors.black};
    }
    .wrapper {
      position: relative;
      z-index: 4;
      width: 100%;
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 0;
      margin-bottom: 0;
      max-width: ${props => props.theme.sizes.maxWidth};
      &.header-section {
        z-index: 9;
        position: relative;
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
      }
      .header-logo {
        width: 100%;
        max-width: 70vw;
        @media screen and (min-width: ${props => props.theme.responsive.m}) {
          max-width: 40vw;
        }
        @media (min-width: 1000px) {
          max-width: 370px;
        }
        @media (min-width: 1400px) {
          max-width: 370px;
        }
      }
      .menu-section {
        position: absolute;
        right: 15px;
        top: 50px;
        display: block;
        text-align: right;
        align-self: center;
        @media screen and (min-width: ${props => props.theme.responsive.m}) {
          right: 50px;
        }
      }
      .header-menu {
        display: inline-block;
        padding: 0;
        margin: 0;
        text-align: left;

        li {
          display: block;
          text-align: right;
          a {
            display: inline-block;
            clear: both;
            text-decoration: none;
            font-size: 22px;
            line-height: 42px;
            color: #989898;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 5.73px;
            text-decoration: none;
            transition: color 0.3s ease;
            position: relative;

            &:after {
              content: "";
              display: block;
              height: 4px;
              width: 100%;
              background: #ff4447;
              transform: scaleX(0);
              transition: transform 300ms ease;
              transform-origin: right;
            }
            &.active {
              color: #ff4447;
              transition: color 300ms ease;
            }
            &:hover {
              color: #2b343e;
              transition: color 300ms ease;
            }
          }
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
