import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import Menu from "./menu"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Header extends Component {
  render() {
    const siteTitle = this.props.siteTitle

    return (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            />
          </h1>
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
            <Menu callbackFromMenu={this.props.callbackFromParent} />
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
