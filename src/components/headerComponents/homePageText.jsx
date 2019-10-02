import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import MobilePhone from "../../images/mobile-phone.png"

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
        <Container className="wrapper">
          <div className="leftside">
            {/* <h1>{data.wordpressPage.acf.page_title_set}</h1> */}
            <h2>Wordpress support in Bath & Bristol</h2>
            <h1>
              Website developer specialising in <span>Wordpress.</span>
            </h1>
            {/* <h3
              className="description"
              dangerouslySetInnerHTML={{
                __html: subtitle,
              }}
            /> */}
            <h3>
              I build bespoke websites and have been doing so for over 9 years
              whilst working for a number of web agencies and companies in Bath
              and the surrounding area.
            </h3>
            {/* <div className="button-container">
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
            </div> */}
          </div>
          <div className="rightside">
            <img
              src={MobilePhone}
              alt="Mobile Phone"
              className="mobile-phone fluid-img"
            />
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
  z-index: 3;
  display: flex;
  .leftside {
    max-width: 800px;
    padding-top: 50px;
    h2 {
      font-size: 26px;
      color: #9f9f9f;
      font-style: italic;
      line-height: 44px;
      font-weight: 100;
      padding-bottom: 15px;
      @media (min-width: 740px) {
        line-height: 37px;
        font-size: 33px;
      }
    }
    h3 {
      color: #2b343e;
      font-weight: normal;
      font-size: 26px;
      line-height: 38px;
    }
  }
  .rightside {
    position: relative;
    margin-top: -79px;
    padding-right: 180px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    max-width: 670px;
  }
  h1 {
    color: #2b343e;
    text-align: left;
    line-height: 56px;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
    @media (min-width: 740px) {
      line-height: 5vw;
      font-size: 5vw;
    }
    @media (min-width: 980px) {
      line-height: 4.2vw;
      font-size: 4vw;
    }
    & span {
      color: #21b2a6;
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
