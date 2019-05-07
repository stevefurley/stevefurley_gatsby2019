import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

class HeaderLogo extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressAcfOptions {
              edges {
                node {
                  options {
                    header_logo {
                      url {
                        source_url
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <img
              src={
                data.allWordpressAcfOptions.edges[0].node.options.header_logo
                  .url.source_url
              }
              className="fluid-img header-logo"
              alt="logo"
            />
          </React.Fragment>
        )}
      />
    )
  }
}

export default HeaderLogo
