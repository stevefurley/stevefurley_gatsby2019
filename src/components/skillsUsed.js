import React, { Component } from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

class SkillsUsed extends Component {
  render() {
    const json = this.props.frontmatter

    const Skills = json.built_using.map((item, i) => (
      <div className={"  row-" + i} key={i}>
        {item.icon === null ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={i}>
            <div className="block text-center">
              <img src={item.image_d.source_url} alt={item.link} />
            </div>
          </a>
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
                src={item.icon.localFile.childImageSharp.fluid.src}
                alt={item.icon.alt}
              />
            </div>
          </a>
        )}
      </div>
    ))

    return (
      <SkillsUsedWrapper>
        <section>
          <div className="wrapper ">
            <div className="leftside ">
              <h2 className="title">Skills used</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: json.email_description,
                }}
              />
            </div>
            <div className="rightside">
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
    padding: 80px 0;
  }
  .rightside {
    width: 100%;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      width: 38.33333%;
    }
  }
  .leftside {
    color: #fff;
    padding-bottom: 30px;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      padding-bottom: 20px;
      width: 41.66667%;
    }
    .title {
      font-size: 42px;
      line-height: 52px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 30px;
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      flex-wrap: wrap;
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
