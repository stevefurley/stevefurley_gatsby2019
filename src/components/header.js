import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobileMenuButton from "./mobileMenuButton"
import styled from "styled-components"
import HeaderLogo from "../images/logo.svg"
import HeaderText from "./headerComponents/homePageText"
import BackgroundImage from "./headerComponents/background_image"
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
      <Location>
        {({ location }) => {
          if (location.pathname === "/") {
            return <BackgroundImage />
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
              <div className="wrapper">
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
                      <ListLink to="/#projects">Projects</ListLink>
                      <ListLink to="/#contact">Contact</ListLink>
                      <ListLink to="/terms-conditions">
                        Terms Conditions
                      </ListLink>
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
      padding: 30px 15px 0 15px;
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 30px;
      width: 100%;
      max-width: ${props => props.theme.sizes.maxWidth};
      .header-logo {
        width: 100%;
        max-width: 70vw;
        @media screen and (min-width: ${props => props.theme.responsive.m}) {
          padding-left: 15px;
          max-width: 40vw;
        }
        @media (min-width: 1000px) {
          max-width: 30vw;
        }
        @media (min-width: 1400px) {
          max-width: 25vw;
        }
      }
      .menu-section {
        display: block;
        text-align: right;
        align-self: center;
        @media screen and (min-width: ${props => props.theme.responsive.m}) {
          padding-right: 15px;
        }
      }
      .header-menu {
        display: inline-block;
        padding: 0;
        margin: 0;
        text-align: left;

        li {
          display: block;
          a {
            display: block;
            text-decoration: none;
            font-size: 22px;
            line-height: 52px;
            color: #fff;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 8.73px;
            text-decoration: none;
            transition: color 0.3s ease;
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
