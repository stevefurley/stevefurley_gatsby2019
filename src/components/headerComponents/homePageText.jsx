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
        <Container className="wrapper-padding">
          <div className="leftside">
            {/* <h1>{data.wordpressPage.acf.page_title_set}</h1> */}
            <h2>Wordpress support in Bath & Bristol</h2>
            <h1>
              Website developer
              <br />
              specialising <br />
              in
              <span> Wordpress.</span>
            </h1>
            {/* <h3
              className="description"
              dangerouslySetInnerHTML={{
                __html: subtitle,
              }}
            /> */}
            <h3>
              Seeking a web presence for your company?<br />Agency looking to
              hire a reliable freelancer?
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
    max-width: 810px;
    padding-top: 50px;
    @media screen and (min-width: 1110px) {
      max-width: 720px;
      padding-top: 100px;
    }
    @media screen and (min-width: 1600px) {
      max-width: none;
    }
    h2 {
      font-size: 26px;
      color: #9f9f9f;
      font-style: italic;
      line-height: 44px;
      font-weight: 100;
      padding-bottom: 15px;
      @media (min-width: 740px) {
        line-height: 30px;
        font-size: 20px;
      }
      @media (min-width: 1000px) {
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
    display: flex;
    text-align: right;
    justify-content: flex-end;
    flex-grow: 1;
    img {
      display: inline-block;
      max-width: 32vw;
    }
  }
  h1 {
    color: #2b343e;
    text-align: left;
    line-height: 56px;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 30px;
    @media (min-width: 740px) {
      line-height: 6.4vw;
      font-size: 5.5vw;
    }
    @media (min-width: 1000px) {
      font-size: 47px;
      line-height: 57px;
    }
    @media (min-width: 1400px) {
      font-size: calc(60px + 1.7vw);
      line-height: calc(60px + 1.9vw);
    }
    @media (min-width: 1920px) {
      font-size: calc(80px + 1.7vw);
      line-height: calc(90px + 1.7vw);
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
