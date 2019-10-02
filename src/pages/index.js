import React, { Component } from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import styled from "styled-components"
import Hello from "../components/hello"
import AboutMe from "../components/aboutMe"
import Testimonials from "../components/testimonials"
import RecentProjects from "../components/recentProjects"
import SkillsUsed from "../components/skillsUsed"
import GetInTouch from "../components/getInTouch"

class HomePage extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage.acf
    //console.log(currentPage)
    return (
      <Layout>
        <HomeContent>
          <SEO title="Homepage" description="this is the description" />

          <Hello frontmatter={currentPage} />
          <AboutMe frontmatter={currentPage} />
          <Testimonials frontmatter={currentPage} />
          <RecentProjects frontmatter={currentPage} />
          <SkillsUsed frontmatter={currentPage} />
          <GetInTouch frontmatter={currentPage} />
        </HomeContent>
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
        im_steve_photo {
          localFile {
            childImageSharp {
              sizes(maxWidth: 900, quality: 100) {
                ...GatsbyImageSharpSizes_tracedSVG
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
        quotes {
          name
          description
          link
          company_name
          logo {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt_text
          }
          small_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt_text
          }
        }
        some_projects {
          title
          link
          image {
            localFile {
              url
              childImageSharp {
                fluid(fit: COVER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          description
        }
        built_using {
          link
          image_d {
            source_url
          }
          icon {
            source_url
            localFile {
              url
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        email_description
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

const HomeContent = styled.div`
  position: relative;
`
