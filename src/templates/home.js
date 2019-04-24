import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"

import { rhythm } from "../utils/typography"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage
    console.log(currentPage);
    return (
      <Layout>
          this is the homepage
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
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
// acf {
//   page_builder_post {
//     __typename
//     ... on WordPressAcf_post_photo {
//       photo {
//         localFile {
//           childImageSharp {
//             fluid(maxWidth: 680) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }