import React, { Component } from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

class Testimonials extends Component {
  render() {
    const json = this.props.frontmatter

    const testimonials = json.quotes.map((item, i) => (
      <div
        className={
          "pad-bottom-10-m pad-bottom-15 col-12   col-4-l testimonial flex flex-column row-" +
          i
        }
        key={i}
      >
        <div className="inner flex-grow-1">
          <div className="block text-center">
            {item.logo === null ? (
              "nuaksdjl"
            ) : (
              <img
                className="img-block"
                src={item.logo.localFile.childImageSharp.fluid.src}
                alt="Gatsby Docs are awesome"
              />
            )}
          </div>
          <span className="big-quotes">"</span>
          <div className="textsection">
            <h4 className="  pad-top-10 uppercase font-600">{item.name}</h4>
            <a
              href={item.link}
              target="_blank"
              key={i}
              rel="noopener noreferrer"
              className={"custom-links"}
            >
              {item.company_name}
            </a>
            <div className="description">"{item.description}"</div>
          </div>
        </div>
      </div>
    ))

    return (
      <TestimonialsWrapper>
        <section id="testimonials">{testimonials}</section>
      </TestimonialsWrapper>
    )
  }
}

export default Testimonials

const TestimonialsWrapper = styled.div`
  background: #eaecf1;
  #testimonials {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* grid-template-columns: minmax(300px, 500px) minmax(300px, 500px) minmax(
        300px,
        500px
      ); */
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    grid-template-rows: auto;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px; */
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    @media screen and (min-width: ${props => props.theme.responsive.l}) {
      padding: 80px 15px;
    }
    .testimonial {
      padding: 15px;
      width: 100%;
      @media screen and (min-width: ${props => props.theme.responsive.l}) {
        display: flex;
        width: 33%;
        min-width: 316px;
      }
      .img-block {
        border-radius: 100%;
        margin: auto;
        max-width: 150px;
        height: auto;
        display: inline-block;
      }
      .inner {
        background: #fff;
        padding: 60px 25px;
        box-shadow: 0 0 44px 0 rgba(0, 0, 0, 0.17);
        @media screen and (min-width: ${props => props.theme.responsive.m}) {
          display: flex;
          padding: 30px 25px;
          align-items: center;
        }
        @media screen and (min-width: ${props => props.theme.responsive.l}) {
          display: block;
          padding: 60px 25px;
          align-items: start;
        }
        .textsection {
          text-align: center;
          @media screen and (min-width: ${props => props.theme.responsive.m}) {
            text-align: left;
            padding-left: 30px;
          }
          @media screen and (min-width: ${props => props.theme.responsive.l}) {
            text-align: center;
            padding-left: 0;
          }
        }
        .custom-links {
          text-decoration: none;
          display: block;
          font-weight: 900;
          color: ${props => props.theme.colors.red};
          transition: color 300ms ease;
          padding-bottom: 15px;
          text-transform: uppercase;
          &:hover {
            color: ${props => props.theme.colors.lightred};
            transition: color 300ms ease;
          }
        }
        .description {
          color: #2e2e2e;
          font-weight: 300;
        }
        .person {
          border-radius: 100%;
          background-position: center center;
          background-size: cover;
          height: 158px;
          width: 158px;
          display: inline - block;
          margin-bottom: 30px;
        }
      }
    }
  }
`
