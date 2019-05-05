import React, { Component } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import Img from "gatsby-image"

class HomePage extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage.acf
    console.log(currentPage)
    return (
      <Layout>
        <SEO title="Page two" />
        <div className="wrapper">
          <h1>this is the homepage its pulls in the home.js in templates</h1>
        </div>

        <Link to="/">Go back to the homepage</Link>

        <h2>{currentPage.big_sub_text_end} from live site</h2>
        <Img
          fluid={
            currentPage.header_background_image.localFile.childImageSharp.fluid
          }
        />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div className="pad-bottom-60 pad-top-60" />
        <div id="about-me">{currentPage.big_sub_text_end}</div>
      </Layout>
    )
  }
}

export default HomePage

// Set here the ID of the home page.
export const pageQuery = graphql`
  query($frontpage_id: Int = 121) {
    wordpressPage(wordpress_id: { eq: $frontpage_id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      acf {
        header_background_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        page_title_set
        page_sub_title_set
        left_button_text
        left_button_link
        right_button_text
        right_button_link
        big_text
        big_sub_text_start
        big_sub_text_end
        im_steve_title
        im_steve_description
        get_in_touch_button_text
        get_in_touch_button_link
        some_projects_title
        some_projects_description
        get_in_touch_title
        email_address_set
        email_description
        contact_number_set
        contact_text_section
        services
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
