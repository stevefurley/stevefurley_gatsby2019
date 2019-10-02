import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

class AboutMe extends Component {
  render() {
    // const currentPage = this.props.data.wordpressPage.acf
    const pagebits = this.props.frontmatter
    const Description = this.props.frontmatter.im_steve_description
    //console.log(pagebits.im_steve_photo)
    return (
      <AboutWrapper>
        <section className="about-me wrapper" id="about">
          <div className="container ">
            <article className="leftside">
              <header>
                <h3>{pagebits.im_steve_title}</h3>
              </header>
              <h2
                className="description"
                dangerouslySetInnerHTML={{
                  __html: Description,
                }}
              />
              <Link
                className="redbutton margin-top-30"
                to={"/" + pagebits.get_in_touch_button_link}
              >
                <span>{pagebits.get_in_touch_button_text}</span>
              </Link>
            </article>
            <div className="rightside">
              <Img
                className="img-block"
                sizes={pagebits.im_steve_photo.localFile.childImageSharp.sizes}
                style={{ position: "" }}
                alt="Gatsby Docs are awesome"
              />
            </div>
          </div>
        </section>
      </AboutWrapper>
    )
  }
}

// Set here the ID of the home page.

const AboutWrapper = styled.div`
  background: #eaecf1;
  position: relative;
  .about-me {
    padding-top: 90px;
    padding-bottom: 0;
    margin: auto;
    max-width: 1600px;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      padding-bottom: 0px;
    }
    @media screen and (min-width: ${props => props.theme.responsive.l}) {
      padding-bottom: 80px;
    }
    @media only screen and (min-width: 1400px) {
      padding-bottom: 260px;
    }
    .container {
      position: relative;
      /* display: flex;
      flex-direction: column;
      padding: 0; */
      @media screen and (min-width: ${props => props.theme.responsive.m}) {
        /* flex-direction: row; */
      }
      @media screen and (min-width: ${props => props.theme.responsive.l}) {
        display: block;
        padding: 0 50px;
      }
    }
    .leftside {
      /* background: ${props => props.theme.colors.darkblue}; */
      background: #fff;
      padding: 30px 15px 40px 15px;
      position: relative;
      z-index: 2;
      order: 2;
      text-align: center;
      @media screen and (min-width: ${props => props.theme.responsive.m}) {
        top: 0;
        text-align: left;
        margin-right: 0;
        order: unset;
        padding: 30px 30px 40px 30px;
        max-width: calc(70% - 60px);
      }
      @media screen and (min-width: ${props => props.theme.responsive.m}) {
        max-width: calc(70% - 30px);
      }
      @media only screen and (min-width: 1000px) {
        top: 160px;
        max-width: calc(100% - 540px);
      }
      h3 {
        font-weight: bold;
        font-size: 48px;
        color: #2d3047;
        letter-spacing: 0;
        line-height: 72px;
        padding-left: 20px;
      }
      .description {
        font-size: 20px;
        color: #2d3047;
        letter-spacing: 0.5px;
        line-height: 32px;
      }
    }
    .rightside {
      @media screen and (min-width: ${props => props.theme.responsive.m}) {
        width: calc(30% + 30px);
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
      @media screen and (min-width: ${props => props.theme.responsive.l}) {
        right: 50px;
      }
      @media only screen and (min-width: 1400px) {
        width: auto;
        max-width: 100%;
        height: auto;
        width: 50%;
      }
      .img-block {
        overflow: hidden;
        position: relative;
        display: block;
        @media screen and (min-width: ${props => props.theme.responsive.m}) {
          position: absolute;
          max-width: 100%;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
        @media only screen and (min-width: 1400px) {
          display: block;
          position: relative;
          max-width: none;
          box-shadow: 0px 2px 70px rgba(0, 0, 0, 0.29);
        }
      }
    }
  }
`

export default AboutMe
