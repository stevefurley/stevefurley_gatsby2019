import React, { Component } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SecondPage extends Component {
  render() {
    const currentPage = this.props.data
    console.log(currentPage)
    return (
      <Layout>
        <SEO title="Page two" />
        <h1>this is the homepage</h1>
        <Link to="/">Go back to the homepage</Link>
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
        <div id="about-me">dsakljladskjaksjdsd</div>
      </Layout>
    )
  }
}

export default SecondPage

// Set here the ID of the home page.
export const pageQuery = graphql`
  query($frontpage_id: Int = 121) {
    wordpressPage(wordpress_id: { eq: $frontpage_id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      acf {
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
