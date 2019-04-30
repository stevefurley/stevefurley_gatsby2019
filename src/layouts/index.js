/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import MobileMenu from "../components/mobileMenu"
import Header from "../components/header"

import "../styles/main.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      showMenu: false,
    }
  }

  toggleShowMenu() {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const children = this.props.children
    //const MenuState = this.state.showMenu
    console.log(this)
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <MobileMenu callbackFromParent={this.toggleShowMenu.bind(this)} />
            <Header
              siteTitle={data.site.siteMetadata.title}
              callbackFromParent={this.state.showMenu}
            />

            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with footer here as main
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
