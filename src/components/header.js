import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobileMenuButton from "./mobileMenuButton"
import styled from "styled-components"
import HeaderLogo from "../components/logo"
import BackgroundImage from "../components/images/background_image"
import Breakpoint, { BreakpointProvider } from "react-socks"

const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName="active">
      {props.children}
    </Link>
  </li>
)

class Header extends Component {
  render() {
    //const siteTitle = this.props.siteTitle
    if (window.location.pathname == "/") {
      console.log("home")
    } else {
      console.log("not home")
    }
    return (
      <HeaderWrapper>
        <header>
          <BackgroundImage />
          <div className="wrapper">
            <HeaderLogo />
            <div className="menu-section">
              <Breakpoint medium up>
                <ul className="header-menu">
                  <ListLink to="/">Home</ListLink>
                  <ListLink to="/#about">about</ListLink>
                  <ListLink to="/#projects">Projects</ListLink>
                  <ListLink to="/#contact">Contact</ListLink>
                  {/* <ListLink to="/terms-conditions">Terms Conditions</ListLink> */}
                </ul>
              </Breakpoint>
              <Breakpoint small down>
                <MobileMenuButton
                  /*passing down the state to the toggle menu button */
                  indextoggle={this.props.indextoggle}
                />
              </Breakpoint>
            </div>
          </div>
        </header>
      </HeaderWrapper>
    )
  }
}

// Set here the ID of the home page.

const HeaderWrapper = styled.div`
  header {
    position: relative;
    .wrapper {
      padding: 30px 0 0 0;
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 30px;
      .header-logo {
        width: 100%;
        max-width: 40vw;
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
            color: #fff;
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
