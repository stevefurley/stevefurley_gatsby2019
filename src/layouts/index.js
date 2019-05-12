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
import Breakpoint, { BreakpointProvider } from "react-socks"

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
    const location = this.props.location
    //const MenuState = this.state.showMenu

    return (
      <BreakpointProvider>
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
              <MobileMenu
                /* Getting the state from the above show toggle function that
                is being passed up through componets from menu toggle
              */
                indextoggle={this.toggleShowMenu.bind(this)}
                callbackFromParent={this.state.showMenu}
              />
              <Header
                siteTitle={data.site.siteMetadata.title}
                /*pass state down to mobile menu toggle button*/
                indextoggle={this.toggleShowMenu.bind(this)}
              />

              <div>
                <main location={location}>{children}</main>
                <footer>
                  © {new Date().getFullYear()}, Built with footer here as main
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
              </div>
            </>
          )}
        />
      </BreakpointProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
