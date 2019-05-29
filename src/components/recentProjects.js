import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

class RecentProjects extends Component {
  render() {
    const json = this.props.frontmatter
    console.log(json)
    const some_projects_title = json.some_projects_title
    const some_projects_description = json.some_projects_description
    //console.log(json.acf.some_projects);

    const Projects = json.some_projects.map((item, i) => (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        key={i}
        className={
          "some-projects-blocks project-block  no-padding relative flex flex-column" +
          i
        }
      >
        <div className="block-wrapper">
          <div className="projects-img-container">
            <Img fluid={item.image.localFile.childImageSharp.fluid} />
          </div>

          <div className="text-wrap">
            <span className="background-colour" />
            <div className="text-wrapping">
              <h4 className="title">{item.title}</h4>
              <span className="visit-site">{item.description}</span>
            </div>
          </div>
        </div>
      </a>
    ))

    return (
      <RecentSection>
        <section id="recent-jobs">
          <article className="wrapper text-center">
            <div>
              <h2 className="title">{some_projects_title}</h2>
            </div>
            <div
              className="main-description center"
              dangerouslySetInnerHTML={{
                __html: some_projects_description,
              }}
            />
          </article>
        </section>
        <section id="some-projects">
          <div className="flex flex-wrap wrapper no-padding">{Projects}</div>
        </section>
      </RecentSection>
    )
  }
}

// Set here the ID of the home page.

const RecentSection = styled.div`
  background: #fff;
  @media screen and (min-width: ${props => props.theme.responsive.m}) {
    padding-bottom: 5px;
  }
  @media screen and (min-width: ${props => props.theme.responsive.l}) {
    padding-bottom: 80px;
  }
  article {
    padding: 80px 0 35px 0;
  }
  .main-description {
    max-width: 800px;
    margin: auto;
  }
  .some-projects-blocks {
    text-decoration: none;
    position: relative;
    cursor: pointer;
    width: 100%;
    overflow: hidden;
    @media screen and (min-width: ${props => props.theme.responsive.l}) {
      width: 50%;
    }
    .cover {
      z-index: 4;
    }
    .background-colour {
      background: rgba(0, 0, 0, 0.5);
    }
    &:hover {
      .background-colour {
        opacity: 0;
        transition: opacity 300ms ease;
      }
      .text-wrapping {
        opacity: 1;
        transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      }
      img {
        transform: scale(1.05);
        transition: transform 300ms ease;
      }
    }
    .visit-site {
      color: #fff;
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;
      display: block;
    }
    .title {
      position: relative;
      z-index: 2;
      color: #fff;
      font-size: 22px;
      line-height: 33px;
      font-weight: 600;
      letter-spacing: 1px;
      display: block;
    }
    .text-wrapping {
      position: relative;
      z-index: 2;
      opacity: 1;
      transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .background-colour {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
      opacity: 1;
      transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .projects-img-container {
      width: 100%;
      position: relative;
      background: #d1d3d8;
      box-shadow: 0 0 44px 0 rgba(0, 0, 0, 0.17);
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: scale(1);
        transition: transform 300ms ease;
        align-self: center;
      }
    }
    .block-wrapper {
      position: relative;
      display: flex;
      flex-grow: 1;
      margin: 0px 0 5px 0;
      overflow: hidden;
      @media screen and (min-width: ${props => props.theme.responsive.m}) {
        margin: 5px;
      }
      @media screen and (min-width: ${props => props.theme.responsive.l}) {
        margin: 25px;
      }
    }
    .text-wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px;
    }
  }
`

export default RecentProjects
