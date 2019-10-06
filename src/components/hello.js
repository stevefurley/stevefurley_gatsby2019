import React, { Component } from "react"
import styled from "styled-components"
import HeartIcon from "../images/heart-icon.svg"

class HelloBlock extends Component {
  render() {
    // const currentPage = this.props.data.wordpressPage.acf
    // console.log(currentPage)
    return (
      <HelloSection>
        <div className="wrapper">
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
        </div>
      </HelloSection>
    )
  }
}

// Set here the ID of the home page.

const HelloSection = styled.div`
    background: #2183b2;
  margin: auto;
    display: block;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      padding-bottom: 50px;
    }
     @media (min-width: 1400px) {
        padding-bottom: 100px;
     }
    p {
      color: #fff;
      letter-spacing: 0;
      line-height: 65px;
      font-size: 100px;
      padding-left: 0;
      font-weight: bold;
      text-align: center;
       @media (min-width: 740px) {
        font-size: 17vw;
    line-height: 18vw;
        text-align: left;
      }
     @media (min-width: 1400px) {
        font-size: 13vw;
        line-height: 13vw;
      }
    }
    h3 {
      font-weight: bold;
      font-size: 38px;
      line-height: 52px;
      color: #fff;
      letter-spacing: 0;
      text-align: center;
        @media (min-width: 740px) {
       font-size: 6vw;
        text-align: left;
        line-height: 9vw;
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
