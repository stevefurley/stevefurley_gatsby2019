import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
// import GlobalStyle from "../../utils/global"

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

      const subtitle = data.wordpressPage.acf.page_sub_title_set
      // console.log(data.wordpressPage.acf.left_button_link)
      return (
        <Container>
          <h1>{data.wordpressPage.acf.page_title_set}</h1>
          <h2
            className="description"
            dangerouslySetInnerHTML={{
              __html: subtitle,
            }}
          />
          <div className="button-container">
            <Link
              to={"/" + data.wordpressPage.acf.left_button_link}
              className="redbutton"
            >
              <span>{data.wordpressPage.acf.left_button_text}</span>
            </Link>
            <span className="or">or</span>
            <Link
              to={"/" + data.wordpressPage.acf.right_button_link}
              className="redbutton"
            >
              <span>{data.wordpressPage.acf.right_button_text}</span>
            </Link>
          </div>
        </Container>
      )
    }}
  />
)

export default HomepageHeaderText

const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 70px 15px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #ffffff;
    text-align: center;
    line-height: 56px;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
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
  a {
  }
  .button-container {
    display: flex;
    padding-top: 40px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 740px) {
      flex-direction: row;
    }
    .or {
      font-size: 30px;
      font-style: italic;
      color: #e5e1ee;
      text-align: center;
      padding-bottom: 10px;
      font-size: 0;
      @media (min-width: 740px) {
        padding: 0 40px;
        font-size: 30px;
      }
    }
  }
`
