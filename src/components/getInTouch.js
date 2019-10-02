import React, { Component } from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

class GetInTouch extends Component {
  state = {
    your_name: "",
    your_email: "",
    current_web_address: "",
    phone: "",
    your_message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    // console.log(this.state)
    if (this.state.your_email.length > 3 && this.state.your_name.length > 3) {
      document.getElementById("emailfail").classList.remove("active")
      document.getElementById("namefail").classList.remove("active")
      var xhr = new XMLHttpRequest()
      var data = new FormData()
      data.append("your_name", this.state.your_name)
      data.append("your_email", this.state.your_email)
      data.append("current_web_address", this.state.your_email)
      data.append("phone", this.state.your_email)
      data.append("your_message", this.state.your_email)

      //console.log(data)
      // get a callback when the server responds
      xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
          document
            .getElementById("custom-contact-form")
            .classList.add("hide-form")

          document.getElementById("thanks-block").classList.add("show")
          // console.log(this)
          // console.log(this.responseText)
        }
      })
      // open the request with the verb and the url
      xhr.open(
        "POST",
        "https://stevefurley.co.uk/wordpress_site/wp-json/contact-form-7/v1/contact-forms/5/feedback"
      )

      // send the request

      xhr.send(data)

      event.preventDefault()
      //alert(`Welcome ${this.state.your_name} ${this.state.your_email}!`)
    } else {
      if (this.state.your_email.length < 3) {
        document.getElementById("emailfail").classList.add("active")
      } else {
        document.getElementById("emailfail").classList.remove("active")
      }
      if (this.state.your_name.length < 3) {
        document.getElementById("namefail").classList.add("active")
      } else {
        document.getElementById("namefail").classList.remove("active")
      }
      console.log("nope")
      event.preventDefault()
    }
  }

  render() {
    const json = this.props.frontmatter
    const shape1 =
      "M714,741 C767.5625,721.927083 819.0625,721.927083 868.5,741 C944.936188,721.304421 998.302315,746.870212 1098.73437,718.984375 C1117.0453,714.443362 1140.46718,721.781904 1169,741 L1169,776.176612 L1169,1043.59934 L714,1135 L714,741 Z;"
    const shape2 =
      "M714,741 C873.724833,885.46372 979.065979,951.130386 1030.02344,938 C1106.45963,918.304421 999.497064,778.12594 1099.92912,750.240103 C1118.24005,745.69909 1141.26368,742.619056 1169,741 L1169,776.176612 L1169,1043.59934 L714,1135 L714,741 Z;"
    const shape3 =
      "M714,836.629108 C766.042895,800.741131 817.543072,776.231949 868.50053,763.101562 C944.936718,743.405983 999.497064,778.12594 1099.92912,750.240103 C1118.24005,745.69909 1141.26368,742.619056 1169,741 L1169,776.176612 L1169,1043.59934 L714,1135 L714,836.629108 Z;"
    const shape4 =
      "M714,836.629108 C792.193744,859.619109 856.769346,864.548916 907.726804,851.41853 C984.162992,831.722951 999.497064,778.12594 1099.92912,750.240103 C1118.24005,745.69909 1141.26368,742.619056 1169,741 L1169,776.176612 L1169,1043.59934 L714,1135 L714,836.629108 Z;"
    //console.log(json)
    return (
      <GetInTouchWrapper>
        <section className="wrapper">
          <div className="leftside ">
            <h2 className="title">{json.get_in_touch_title}</h2>
            <a className="email" href={"mailto:" + json.email_address_set}>
              {json.email_address_set}
            </a>
            <a className="tel" href={"tel:" + json.contact_number_set}>
              {json.contact_number_set}
            </a>

            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: json.contact_text_section,
              }}
            />
          </div>
          <div className="rightside">
            <div className="custom-form-wrapper ">
              <div id="thanks-block">
                <p>Thankyou for your interest I'll be in touch shortly</p>
              </div>
              <form onSubmit={this.handleSubmit} id="custom-contact-form">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LelW7sUAAAAAGBtKfEF-y7j2VgQLIUcmd8tOJx-"
                />
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="your_name"
                    value={this.state.your_name}
                    onChange={this.handleInputChange}
                    placeholder="Name"
                  />
                  <span className="fail" id="namefail">
                    Please include your name
                  </span>
                </div>
                <div className="input-wrapper" id="email">
                  <input
                    type="email"
                    name="your_email"
                    value={this.state.your_email}
                    onChange={this.handleInputChange}
                    placeholder="Email"
                  />
                  <span className="fail" id="emailfail">
                    Please include an email
                  </span>
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="current_web_address"
                    value={this.state.current_web_address}
                    onChange={this.handleInputChange}
                    placeholder="Current web address"
                  />
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    placeholder="Phone"
                  />
                </div>
                <div className="input-wrapper">
                  <textarea
                    type="textarea"
                    name="your_message"
                    value={this.state.your_message}
                    onChange={this.handleInputChange}
                    placeholder="Message"
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>

        <div className="test">
          <svg width="455px" height="394px" viewBox="0 0 455 394">
            <path
              d={shape1}
              fillRule="nonzero"
              fill="#070707"
              transform="translate(-714.000000, -736.000000)"
            >
              <animate
                dur="5s"
                repeatCount="100"
                attributeName="d"
                //Value 1 is the same as above
                //value 2 is the new one
                // value 3 is the same as above
                // 4 shapes means 3 below
                values={shape1 + shape2 + shape3 + shape4}
                fill="freeze"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </path>
          </svg>
        </div>
      </GetInTouchWrapper>
    )
  }
}

export default GetInTouch

const GetInTouchWrapper = styled.div`
  background: #eaecf1;
  padding-bottom: 15px;
  overflow: hidden;
  padding-bottom: 50px;
  padding-top: 50px;
  @media screen and (min-width: ${props => props.theme.responsive.m}) {
    padding: 80px 0;
  }
  .test {
    background: red;
    width: 100%;
    height: 800px;
    svg {
      width: 100%;
      height: auto;
    }
  }
  .fail {
    color: red;
    display: none;
    &.active {
      display: block;
    }
  }
  .custom-form-wrapper {
    position: relative;
    #thanks-block {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 300ms ease;
      &.show {
        transform: translate(-50%, -50%) scale(1);
        transition: transform 300ms ease;
      }
    }
  }
  #custom-contact-form {
    transform: scale(1);
    transition: transform 300ms ease;
    &.hide-form {
      transform: scale(0);
      transition: transform 300ms ease;
    }
    .input-wrapper {
      margin-bottom: 15px;
      input {
        width: 100%;
        padding: 15px 25px;
        font-size: 17px;
        border: 0;
      }
      textarea {
        width: 100%;
        padding: 15px 25px;
        font-size: 17px;
        border: 0;
      }
    }
    [type="submit"] {
      background: #ff4547;
      padding: 15px 25px;
      font-size: 17px;
      width: 100%;
      color: #fff;
      border: 0;
    }
  }
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .leftside {
    width: 50%;
  }
  .rightside {
    width: 41.66667%;
    max-width: 500px;
  }
  .title {
    font-size: 42px;
    line-height: 52px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 30px;
  }
  .email {
    font-weight: 700;
    font-size: 24px;
    color: #ff4547;
    text-decoration: none;
    display: block;
    line-height: 32px;
    padding-bottom: 25px;
  }
  .tel {
    font-weight: 700;
    font-size: 24px;
    color: #ff4547;
    text-decoration: none;
    display: block;
    line-height: 32px;
    padding-bottom: 25px;
  }
  .description {
    font-size: 18px;
    color: #2d3047;
    letter-spacing: 0;
    line-height: 27px;
    ul {
      padding-left: 21px;
      li {
        list-style-position: outside;
        padding-bottom: 15px;
      }
    }
  }
`
