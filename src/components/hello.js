import React, { Component } from "react"
import styled from "styled-components"
import HeartIcon from "../images/heart-icon.svg"

class HelloBlock extends Component {
  render() {
    // const currentPage = this.props.data.wordpressPage.acf
    // console.log(currentPage)
    return (
      <HelloSection>
        <p className="hello">{this.props.frontmatter.big_text}</p>
        <h3>
          <span className="starttext">
            {this.props.frontmatter.big_sub_text_start}
          </span>

          <img src={HeartIcon} alt="Heart Icon" />
          <span className="endtext">
            {this.props.frontmatter.big_sub_text_end}
          </span>
        </h3>
      </HelloSection>
    )
  }
}

// Set here the ID of the home page.

const HelloSection = styled.div`
  
    background: #eaecf1;
  padding: 0 15px 40px 15px;
  margin: auto;
    display: block;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      padding: 0 15px 80px 15px;
    }
    p {
      color: #21b2a6;
      letter-spacing: 0;
      line-height: 65px;
      font-size: 100px;
      padding-left: 0;
      font-weight: bold;
      text-align: center;
        @media screen and (min-width: ${props => props.theme.responsive.m}) {
        font-size: 200px;
        padding-left: 40px;
        line-height: 215px;
        text-align: left;
      }
     @media (min-width: 1400px) {
        font-size: 13vw;
        line-height: 13vw;
        padding-left: 13vw;
        text-align: left;
      }
    }
    h3 {
      font-weight: bold;
      font-size: 38px;
      line-height: 52px;
      color: #2d3047;
      letter-spacing: 0;
      margin-bottom: 50px;
      text-align: center;
        @media (min-width: 740px) {
        font-size: 48px;
         margin-bottom: 10px;
        line-height: 60px;
      }
      @media (min-width: 1400px) {
        font-size: 2.8vw;
        line-height: 2.8vw;
      }
      img {
        padding: 0 15px;
      }
    }
  }
`

export default HelloBlock
