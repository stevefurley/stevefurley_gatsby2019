import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobileMenuButton from "./mobileMenuButton"
import styled from "styled-components"
//import HeaderLogo from "../components/logo"
const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Header extends Component {
  render() {
    const siteTitle = this.props.siteTitle
    //console.log(this)
    return (
      <HeaderWrapper>
        <header>
          <div className="wrapper">
            <div>
              <ul className="header-menu">
                <ListLink to="/">Home</ListLink>
                <ListLink to="/terms-conditions">Terms Conditions</ListLink>
                <ListLink to="/#about-me">Scroll To My Cool Header</ListLink>
              </ul>
              <MobileMenuButton
                /*passing down the state to the toggle menu button */
                indextoggle={this.props.indextoggle}
              />
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
    background: blue;
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 11fr;
      .header-menu {
        display: block
        padding: 0;
        margin: 0;
        li {
          display: block;
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
