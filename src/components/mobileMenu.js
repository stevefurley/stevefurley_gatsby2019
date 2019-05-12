import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import CloseButton from "../images/close-button.svg"

// import { colors } from "../utils/global"

class Navbar extends React.Component {
  // state = { showMenu: false }

  // toggleMenu = () => {
  //   this.setState({
  //     showMenu: !this.state.showMenu,
  //   })
  // }

  updateParent() {
    this.props.indextoggle()
  }

  // showMenu = true

  render() {
    //console.log(this.state.showMenu)
    /* callbackFromParent is passed down from index.js*/
    const menuActive =
      this.props.callbackFromParent === true ? "is-active" : "not-active"

    return (
      <NavWrapper>
        <span className={`coloured-overlay ${menuActive}`} />
        <div className={`navbar-wrapper ${menuActive}`}>
          <img
            src={CloseButton}
            alt="Close-button"
            onClick={this.updateParent.bind(this)}
            className="close-button"
          />
          <nav className="navbar-menu">
            <Link
              className="navbar-link"
              to="/"
              onClick={this.updateParent.bind(this)}
            >
              Home
            </Link>
            <Link
              className="navbar-link"
              to="/services"
              onClick={this.updateParent.bind(this)}
            >
              Services
            </Link>
            <Link
              className="navbar-link"
              to="/contact"
              onClick={this.updateParent.bind(this)}
            >
              Contact
            </Link>
            <Link to="/terms-conditions" onClick={this.updateParent.bind(this)}>
              Terms &#38; Conditions
            </Link>
          </nav>
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.div`
  .close-button {
    position: absolute;
    top: 45px;
    right: 35px;
    cursor: pointer;
  }
  .coloured-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #f5fbff;
    z-index: 12;
    right: 0;
    transform: scaleX(0);
    transition: 300ms transform cubic-bezier(0.4, 0, 0.2, 1) 400ms;
    overflow: hidden;
    transform-origin: top right;
    &.is-active {
      transform: scaleX(1);
      transform-origin: top left;
      transition: 300ms transform cubic-bezier(0.53, -0.01, 0.13, 0.82);
    }
  }
  .navbar-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #ff4547;
    z-index: 12;
    right: 0;
    transform: scaleX(0);
    transition: 300ms transform cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    transform-origin: top right;
    nav {
      margin: 0;
      padding: 140px 40px;
      opacity: 0;
      transition: 1ms ease 0.6s;
      a {
        display: block;
        padding: 16px 10px 12px 0;
        font-size: 32px;
        line-height: 32px;
        font-weight: 600;
        text-transform: capitalize;
        text-decoration: none;
        color: #fff;
        opacity: 0;
        text-align: center;
        transform: translate3d(-8em, 0, 0);
        transition: transform 0s 0.4s;
        &:hover {
          text-decoration: none;
        }
        &.active {
          background: white;
          color: orange;
        }
      }
    }
    &.is-active {
      transform: scaleX(1);
      width: 100%;
      transition: 303ms transform cubic-bezier(0.53, -0.01, 0.13, 0.82) 300ms;
      transform-origin: top left;
      nav {
        opacity: 1;
        transition: 1ms ease 600ms;
        a {
          transform: translate3d(0, 0, 0);
          opacity: 1;
          transition: opacity 0.4s 600ms,
            transform 0.4s 600ms cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }
    }
  }
`
export default Navbar
