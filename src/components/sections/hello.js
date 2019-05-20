import React, { Component } from "react"
import styled from "styled-components"
import HeartIcon from "../../images/heart-icon.svg"

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

          <img src={HeartIcon} alt="Close-button" className="close-button" />
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
  margin-bottom: 40px;
    display: block;
     @media (min-width: 740px) {
      margin-bottom: 80px;
    }
    p {
      color: #eaecf1;
      letter-spacing: 0;
      line-height: 65px;
      font-size: 100px;
      padding-left: 0;
      font-weight: bold;
      padding-top: 40px;
      text-align: center;
        @media (min-width: 740px) {
        font-size: 200px;
        padding-left: 40px;
        line-height: 215px;
        text-align: left;
        padding-top: 20px;
      }
     @media (min-width: 1400px) {
        font-size: 13vw;
        line-height: 13vw;
        padding-left: 13vw;
        text-align: left;
        padding-top: 50px;
      }
    }
    h3 {
      font-weight: bold;
      font-size: 38px;
      line-height: 52px;
      color: #2d3047;
      letter-spacing: 0;
      text-align: center;
        @media (min-width: 740px) {
        font-size: 48px;
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
