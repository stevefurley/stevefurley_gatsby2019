import React, { Component } from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

class Testimonials extends Component {
  render() {
    const json = this.props.frontmatter

    const testimonials = json.quotes.map((item, i) => (
      <div className={"testimonial row-" + i} key={i}>
        <div className="inner flex-grow-1">
          <div className="heading">
            {item.logo === null ? (
              "nuaksdjl"
            ) : (
              <img
                className="img-block"
                src={item.logo.localFile.childImageSharp.fluid.src}
                alt="Gatsby Docs are awesome"
              />
            )}
            <div className="righttext">
              <h4 className="">{item.name}</h4>
              <a
                href={item.link}
                target="_blank"
                key={i}
                rel="noopener noreferrer"
                className={"custom-links"}
              >
                {item.company_name}
              </a>
            </div>
          </div>
          <div className="description">"{item.description}"</div>
        </div>
      </div>
    ))

    return (
      <TestimonialsWrapper>
        <section id="testimonials">
          <p className="customer-title">
            Here’s what my lovely customersers had to say
          </p>
          <div className="wrapper">{testimonials}</div>
        </section>
      </TestimonialsWrapper>
    )
  }
}

export default Testimonials

const TestimonialsWrapper = styled.div`
  background: #eaecf1;
  .customer-title {
    font-size: 30px;
    line-height: 40px;
    text-align: center;
  }
  #testimonials {
    padding-top: 40px;
    padding-bottom: 30px;
    @media screen and (min-width: ${props => props.theme.responsive.m}) {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    @media screen and (min-width: ${props => props.theme.responsive.l}) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .wrapper {
      display: flex;
      flex-wrap: wrap;
      @media screen and (min-width: ${props => props.theme.responsive.l}) {
      padding-left: 25px;
      padding-right: 25px;
    }
    }
    .testimonial {
      padding: 15px 0;
      width: 100%;
      @media screen and (min-width: ${props => props.theme.responsive.m}) {
        display: flex;
        padding: 15px 15px 30px 15px;
        width: 33%;
      }
      .img-block {
        height: 50px;
        display: block;
        width: 50px;
        flex-grow: 0;
        flex-shrink: 0;
        border-radius: 100%;
      }
      .inner {
        background: #fff;
        padding: 30px 30px;
        box-shadow: 0 0 44px 0 rgba(0, 0, 0, 0.17);
        .heading {
          display: flex;
          align-items: center;
          padding-bottom: 15px
        }
        .righttext {
          padding-left: 20px;
        }
        h4 {
          font-size: 24px;
          line-height: 34px;
          margin-bottom: 0;
        }
        .custom-links {
          text-decoration: none;
          display: block;
          font-weight: 100;
          color: #EF5D4A;
          /* color: ${props => props.theme.colors.red}; */
          transition: color 300ms ease;
          font-size: 16px;
          &:hover {
            color: ${props => props.theme.colors.lightred};
            transition: color 300ms ease;
          }
        }
        .description {
          color: #7D7C7C;
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
        }
      }
    }
  }
`
