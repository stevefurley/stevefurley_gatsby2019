import React, { Component } from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

class Curve extends Component {
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
      <Curve className="curve">
        <svg width="455px" height="394px" viewBox="0 0 455 394">
          <path
            d={shape1}
            fill-rule="nonzero"
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
      </Curve>
    )
  }
}

export default Curve

const Curve = styled.div`
  background: red;
  width: 100%;
  height: 800px;
  svg {
    width: 100%;
    height: auto;
  }
`
