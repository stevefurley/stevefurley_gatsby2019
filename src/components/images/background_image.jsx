import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      {
        wordpressPage(wordpress_id: { eq: 121 }) {
          acf {
            header_background_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.

      const imageData =
        data.wordpressPage.acf.header_background_image.localFile.childImageSharp
          .fluid
      return (
        <BackgroundImage
          Tag="span"
          className="header-background"
          fluid={imageData}
          style={{
            // Defaults are overwrite-able by setting one or each of the following:
            opacity: "1",
            left: "0",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          backgroundColor={`#040e18`}
        />
      )
    }}
  />
)

export default BackgroundSection
