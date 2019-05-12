import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const HomepageHeaderText = ({ className }) => (
  <StaticQuery
    query={graphql`
      {
        wordpressPage(wordpress_id: { eq: 121 }) {
          acf {
            page_title_set
            page_sub_title_set
            left_button_text
            left_button_link
            right_button_text
            right_button_link
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      console.log(data)
      return (
        <Textwrapper>
          <div className="headercontainer">
            <h1>{data.wordpressPage.acf.page_title_set}</h1>
            <h2>{data.wordpressPage.acf.page_sub_title_set}</h2>
          </div>
        </Textwrapper>
      )
    }}
  />
)

export default HomepageHeaderText

const Textwrapper = styled.div`
  position: relative;
  .headercontainer {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 15px;
    h1 {
      color: #ffffff;
      text-align: center;
      line-height: 56px;
      font-size: 50px;
      font-weight: bold;
      @media (min-width: 740px) {
        line-height: 5vw;
        font-size: 5vw;
      }
      @media (min-width: 980px) {
        line-height: 4vw;
        font-size: 4vw;
      }
    }
    h2 {
      font-size: 26px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      line-height: 44px;
      font-weight: 300;
      @media (min-width: 740px) {
        line-height: 54px;
        font-size: 36px;
      }
    }
  }
`
