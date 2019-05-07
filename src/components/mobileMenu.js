import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import { colors } from "../utils/global"

class Navbar extends React.Component {
  //state = { showMenu: false }

  // toggleMenu = () => {
  //   this.setState({
  //     showMenu: !this.state.showMenu,
  //   })
  // }

  // showMenu = true

  render() {
    /* callbackFromParent is passed down from index.js*/
    const menuActive =
      this.props.callbackFromParent === true ? "is-active" : "not-active"

    return (
      <NavWrapper>
        <nav className={`navbar-menu ${menuActive}`}>
          <Link className="navbar-link" to="/" onClick={this.toggleMenu}>
            Home this is the mobile mebu
          </Link>
          <Link
            className="navbar-link"
            to="/services"
            onClick={this.toggleMenu}
          >
            Services
          </Link>
          <Link className="navbar-link" to="/contact" onClick={this.toggleMenu}>
            Contact
          </Link>
        </nav>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.div`
  nav {
    z-index: 90;
    top: 90px;
    background: red;
    position: fixed;
    right: 0;
    width: 300px;
    height: 100%;
    top: 0;
    transform: translate(300px, 0);
    transition: transform 300ms ease;
    &.is-active {
      transform: translate(0, 0);
      transition: transform 300ms ease;
    }
    &.is-active {
      background: ${colors.tertiaryColor};
    }
    .navbar-link {
      display: block;
      padding: 10px 30px;
      text-decoration: none;
      color: #fff;
      &:hover {
        text-decortion: none;
      }
    }
  }
`
export default Navbar
