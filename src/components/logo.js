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
                      url
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        )}
      />
    )
  }
}

export default HeaderLogo
