import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
                      sizes {
                        news_desktop {
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 200) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            {console.log(data)}
            {/* <Img
              fluid={
                Date.allWordpressAcfOptions.edges[0].node.options.header_logo
                  .sizes.news_desktop.localFile
              }
            /> */}

            <a href="/">logo here</a>
          </div>
        )}
      />
    )
  }
}

export default HeaderLogo
