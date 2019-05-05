import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobileMenuButton from "./mobileMenuButton"
import styled from "styled-components"
import HeaderLogo from "../components/logo"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Header extends Component {
  render() {
    const siteTitle = this.props.siteTitle
    console.log(this)
    return (
      <HeaderWrapper>
        <header>
          <div className="wrapper">
            <HeaderLogo />
            <div>
              <Link
                to="/"
                style={{ textShadow: `none`, backgroundImage: `none` }}
              >
                {siteTitle}
              </Link>
              <ul style={{ listStyle: `none`, float: `right` }}>
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
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
