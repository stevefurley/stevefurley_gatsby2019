import React, { Component } from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

class SkillsUsed extends Component {
  render() {
    const json = this.props.frontmatter
    console.log(json)
    const Skills = json.built_using.map((item, i) => (
      <div
        className={
          "pad-bottom-10-m pad-bottom-15 col-12   col-4-l testimonial flex flex-column row-" +
          i
        }
        key={i}
      >
        {item.icon === null ? (
          "no icon"
        ) : (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.icon.alt}
            key={i}
          >
            <div className="block text-center">
              <img
                className="img-block"
                src={item.icon.localFile.childImageSharp.fluid.src}
                alt="Gatsby Docs are awesome"
              />
            </div>
          </a>
        )}
      </div>
    ))

    return (
      <SkillsUsedWrapper>
        <section>
          <div className="container flex-space-around">
            <div className="col-12 col-5-l leftside ">
              <h2 className="title">Skills used</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: json.email_description,
                }}
              />
            </div>
            <div className='"col-12 col-5-l'>
              <div className="flex flex-grow-1 skills-wrapper flex-wrap">
                {Skills}
              </div>
            </div>
          </div>
        </section>
      </SkillsUsedWrapper>
    )
  }
}

export default SkillsUsed

const SkillsUsedWrapper = styled.div`
  background: #2d3047;
  padding-bottom: 15px;
  overflow: hidden;
  padding-bottom: 50px;
  padding-top: 50px;
  @media screen and (min-width: ${props => props.theme.responsive.m}) {
    padding: 80px 15px;
  }
  .leftside {
    color: #fff;
    padding-bottom: 30px;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      padding-bottom: 20px;
    }
    .title {
      font-size: 42px;
      line-height: 52px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 30px;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    padding: 0;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      flex-wrap: wrap;
      max-width: 1600px;
      flex-direction: row;
      align-items: center;
    }
  }
  .skills-wrapper {
    justify-content: center;
    img {
      padding: 0 10px 20px;
      cursor: pointer;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
`
